<!-- 收银台确认订单 -->
<script setup>
import { computed } from 'vue';
import { message } from 'ant-design-vue';
import { useRoute, useRouter } from 'vue-router';
import { useDesign, useElementBounding, useRequest, useStore } from 'hooks';
import { getPayMemt } from '@/common/order';
import { setOrder } from '@/common/store';
import { exportInstance } from '@/utils/EventCenter';
import { getOrderDetail, deleteOrder, addGoodsPatchToCart } from './api';
import { downloadFile } from '@/utils/common';
import CountDown from '@/components/CountDown.vue';
import GoodsList from './components/GoodsList.vue';
import InvoiceAddress from '@/components/InvoiceAddress';
import download from '@/assets/svg/download.png';

/* ******************************** state ******************************** */
const route = useRoute();
const router = useRouter();
const { setOrderData, setPayData } = useStore();

const { prefixCls } = useDesign('orderdetail');
const { data: orderDetailData, refresh } = useRequest(() => getOrderDetail(id));

const { height } = useElementBounding({
  backgroundColor: '#fff',
  windowResize: true
});

const id = route?.params?.id;

/** **************************** methods **************************** */
const addToCart = async () => {
  const params = {
    cart: orderDetailData?.value?.item?.map(o => ({
      goods_id: o.goods_id,
      goods_type: o.goods_type,
      quantity: o.quantity
    }))
  };
  const res = await addGoodsPatchToCart(params);
  if (res.ret === 1) {
    message.success('成功加入购物车');
    exportInstance.dispatch('addCart');
  }
};

const oneMoreOrder = () => {
  const params = {
    order_id: id,
    payment_id: orderDetailData?.value?.payment_id,
    cart: orderDetailData?.value?.item?.map(good => ({
      goods_id: good.goods_id,
      goods_type: good.goods_type,
      quantity: good.quantity,
    })),
  };
  setOrderData(params);
  localStorage.setItem('moreOrder', JSON.stringify(params));
  setOrder(orderDetailData?.value?.item);
  router.push('/cashier?orderType=more');
};

// 跳转到支付页
const jumpToPay = () => {
  setPayData('jumpPay', {
    paymentId: orderDetailData?.value?.payment_id,
  });
  router.push(`/cashier?orderId=${id}`);
};

// 取消订单
const cancelOrder = async () => {
  const res = await deleteOrder(id);
  if (res.ret === 1) {
    refresh();
  }
};

/** ****************************** lifecycle ****************************** */
const addressVal = computed(() => {
  const { street, name, door_no, postcode, mobile, area_code, city, country } = orderDetailData?.value?.address?.info || {};
  if (orderDetailData?.value?.address?.info) {
    return `${name || '--'} (+${area_code || '--'}) ${mobile || '--'} ${street || '--'} ${door_no || '--'}, ${postcode|| '--'} ${city || '--'}, ${country || '--'}`;
  }
  return null;
});
</script>

<template>
  <div :class="`${prefixCls} karyshop-apply-form-aform`" v-if="!openPayPage" :style="{ minHeight: `${height}px` }">
    <div :class="`${prefixCls}-order`">
      <section>
        <div :class="`${prefixCls}-title`">
          <span>订单信息</span>
          <count-down v-if="orderDetailData?.status_id === 2" :time="orderDetailData?.seconds"></count-down>
          <span v-if="orderDetailData?.status_id !== 2">{{ orderDetailData?.status_name }}</span>
        </div>
        <ul :class="`${prefixCls}-container`">
          <li :class="`${prefixCls}-item`">
            <span :class="`${prefixCls}-label`">订单编号</span>
            <span :class="`${prefixCls}-info`">{{ orderDetailData?.code }}</span>
          </li>
          <li :class="`${prefixCls}-item`">
            <span :class="`${prefixCls}-label`">下单时间</span>
            <span :class="`${prefixCls}-info`">{{ orderDetailData?.created_at }}</span>
          </li>
          <li :class="`${prefixCls}-item`">
            <span :class="`${prefixCls}-label`">支付时间</span>
            <span :class="`${prefixCls}-info`">{{ orderDetailData?.pay_time || '--' }}</span>
          </li>
          <li :class="`${prefixCls}-item`">
            <span :class="`${prefixCls}-label`">付款方式</span>
            <span :class="`${prefixCls}-info`">{{ getPayMemt(orderDetailData?.payment_id) }}</span>
          </li>
          <li :class="`${prefixCls}-item`">
            <span :class="`${prefixCls}-label`">配送方式</span>
            <span :class="`${prefixCls}-info`">{{ orderDetailData?.freight_name }}</span>
          </li>
          <li :class="`${prefixCls}-item`">
            <span :class="`${prefixCls}-label`">收货日期</span>
            <span :class="`${prefixCls}-info`">{{ orderDetailData?.receiver_sign_time || '--'}}</span>
          </li>
          <li :class="`${prefixCls}-item`">
            <span :class="`${prefixCls}-label`">收货地址</span>
            <span :class="`${prefixCls}-info`">{{ addressVal }}</span>
          </li>
          <li :class="`${prefixCls}-item`">
            <span :class="`${prefixCls}-label`">订单备注</span>
            <span :class="`${prefixCls}-info`">{{ orderDetailData?.remark }}</span>
          </li>
        </ul>
      </section>

      <section>
        <div :class="`${prefixCls}-title`">产品信息（{{ orderDetailData?.item?.length }}）</div>
        <div class="prefixCls">
          <template v-for="item in orderDetailData?.item" :key="item.product_id">
            <goods-list :goods="item"></goods-list>
          </template>
        </div>
      </section>
    </div>
    <div :class="`${prefixCls}-right-container`">
      <div :class="`${prefixCls}-action`">
        <div :class="`${prefixCls}-tocart`" @click="addToCart" v-if="orderDetailData?.status_id !== 2">
          加入购物车
        </div>
        <div :class="`${prefixCls}-tocart`" @click="cancelOrder" v-if="orderDetailData?.status_id === 2">
          取消订单
        </div>
        <div :class="`${prefixCls}-more`" @click="oneMoreOrder" v-if="orderDetailData?.status_id !== 2">
          再来一单
        </div>
        <div :class="`${prefixCls}-more`" @click="jumpToPay" v-if="orderDetailData?.status_id === 2">
          立即支付
        </div>
      </div>
      <div :class="`${prefixCls}-detail`">
        <div :class="`${prefixCls}-order-title`">价格明细</div>
        <li :class="`${prefixCls}-order-item`">
          <span>产品总价（{{ orderDetailData?.piece }}）</span>
          <span>€{{ orderDetailData?.total_price }}</span>
        </li>
        <li :class="`${prefixCls}-order-item`">
          <span>税金总额</span>
          <span :class="`${prefixCls}-order-price`">€{{ orderDetailData?.tax_fee }}</span>
        </li>
        <li :class="`${prefixCls}-order-item`">
          <span>环保押金</span>
          <span :class="`${prefixCls}-order-price`">€{{ orderDetailData?.cash_pledge }}</span>
        </li>
        <li :class="`${prefixCls}-order-item`">
          <span>运费</span>
          <span :class="`${prefixCls}-order-price`">€{{ orderDetailData?.express_fee }}</span>
        </li>
        <li :class="`${prefixCls}-order-item`">
          <span>支付优惠</span>
          <span :class="`${prefixCls}-order-price cashier-discount`">-€{{ orderDetailData?.pay_discount }}</span>
        </li>
        <a-divider />
        <div>
          <li :class="`${prefixCls}-order-item`">
            <span :class="`${prefixCls}-total`">合计</span>
            <span :class="`${prefixCls}-total-price cashier-total`">€{{ orderDetailData?.payment_fee }}</span>
          </li>
        </div>
      </div>

      <div :class="`${prefixCls}-detail`">
        <div :class="`${prefixCls}-order-title`">配送单&发票</div>
        <div :class="`${prefixCls}-line`">
          发票地址
        </div>
        <!-- 发票地址组件 -->
        <div :class="`${prefixCls}-line`">
          <invoice-address :address="orderDetailData?.invoice" />
        </div>
        <a-divider v-if="orderDetailData?.attachments?.length" />
        <!-- pdf下载 -->
        <div v-for="file in orderDetailData?.attachments"
          :key="file.file_name"
          :class="`${prefixCls}-file`"
          @click="downloadFile(file.url, file.file_name)"
        >
          <span>
            {{ file.file_name }}
          </span>
          <span>
            <img :src="download" height="20" width="20" />
            <span :class="`${prefixCls}-download`">下载</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url(@/styles/variable.less);

.karyshop {
  &-orderdetail {
    display: flex;
    height: 100%;
    width: 1600px;
    margin: 0 auto;
    background-color: @light;
    padding: 20px;

    &-action {
      display: flex;
      height: 60px;
      margin-bottom: 20px;
      cursor: pointer;
      user-select: none;
    }
    &-tocart {
      width: 200px;
      line-height: 60px;
      text-align: center;
      border: 1px solid #FF7500;
      border-radius: 16px;
      color: @primary;
      margin-right: 20px;
    }

    &-more {
      width: 280px;
      line-height: 60px;
      text-align: center;
      background: #FF7500;
      border-radius: 16px;
      color: @light;
    }

    &-order {
      display: inline-flex;
      flex-direction: column;
      flex: 1;

      &-title {
        position: relative;
        margin-bottom: 30px;
        padding: 0 20px;
        color: @fontColor;
        font-size: 18px;
        font-weight: 500;

        &::before {
          .beforeTitle();
        }
      }

      &-item {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 0 20px;
        height: 20px;
        line-height: 20px;
        font-size: 15px;
        color: @secondColor;
      }

      &-price {
        color: @fontColor;
      }
    }

    &-right-container {
      flex: 0 500px;
      margin-left: 40px;
      height: fit-content;
    }

    &-detail {
      margin-bottom: 20px;
      padding: 20px 0;
      border-radius: 16px;
      font-size: 18px;
      border: 1px solid @secondBgColor;
    }

    &-settlement {
      padding: 0 20px;

      .ant-btn {
        width: 100%;
      }
    }

    &-title {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      padding: 20px;
      background-color: @bdColor;
      font-weight: 500;
      font-size: 18px;
      border-radius: 16px;
      color: @fontColor;

      &::before {
        .beforeTitle();
      }
    }

    &-container {
      padding: 0 20px;
    }

    &-item {
      display: flex;
      padding: 13px 0;
      font-size: 15px;
    }

    &-label {
      display: inline-flex;
      flex-basis: 60px;
      color: #666;
      margin-right: 10px;
    }

    &-info {
      display: inline-flex;
      flex: 1;
      font-weight: 500;
      font-size: 15px;
      color: #333;
    }

    &-add-address {
      color: #006fff;
      cursor: pointer;
    }
    &-file {
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;
      font-size: 15px;
      color: #666;
      cursor: pointer;
    }
    &-download {
      color: #006FFF;
    }
    &-line {
      padding: 0 20px;
      margin-bottom: 16px;
      font-weight: 400;
      font-size: 15px;
      color: #666;
    }
  }
}

.cashier-total {
  font-weight: 700;
  font-size: 18px;
  color: #333;
}

.cashier-discount {
  font-weight: 500;
  font-size: 15px;
  color: #FF7500;
}
</style>
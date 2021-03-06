import React from "react";
import List from 'components/List';
import Item from "./Item";

export default ({coupon, fetchCoupons, onDelete}) => <List
  isFetching={coupon.isFetching}
  isMore={coupon.isMore}
  dataSet={coupon.coupons}
  onEndReached={fetchCoupons}
  renderRow={(rowData) => <Item coupon={rowData} onDelete={onDelete}/>}
/>
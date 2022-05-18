import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { Order } from 'src/models/Order';
import { Notify } from 'quasar';

export type OrdersState = {
  orders: Array<Order>;
  order?: Order;
  loading: boolean;
  error: string;
};

export const useOrdersStore = defineStore('orders', {
  state: () => (
    {
      orders: [],
      order: undefined,
      loading: false,
      error: ''
    } as OrdersState
  ),
  getters: {
    allOrders: (state) => state.orders,
    ordersQuantity: (state) => state.orders.length,
    currentOrder: (state) => state.order,
    getOrdersPerCustomer: (state) => {
      return (authorId: string) => state.orders.filter((order: Order) => order.userId === authorId);
    }
  },
  actions: {
    fetchOrders() {
      this.orders = [];
      this.loading = true;
      return api.get('/posts')
        .then((response) => {
          this.orders = response.data;
        }) 
        .catch((error) => {
          Notify.create({
            message: 'Oops, something went wrong',
            caption: error.message,
            color: 'negative',
            icon: 'report_problem',
            position: 'top-right',
          });
        })
        .finally(() => this.loading = false);
    },
    fetchOrder(orderId: number) {
      this.order = undefined;
      this.loading = true;
      return api.get(`/posts/${orderId}`)
        .then((response) => {
          this.order = response.data;
        }) 
        .catch((error) => {
          Notify.create({
            message: 'Oops, something went wrong',
            caption: error.message,
            color: 'negative',
            icon: 'report_problem',
            position: 'top-right',
          });
        })
        .finally(() => this.loading = false);
    }
  },
});

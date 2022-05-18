import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { Customer } from 'src/models/Customer';
import { Order } from 'src/models/Order';
import { Notify } from 'quasar';

export type CustomersState = {
  customers: Array<Customer>;
  customer?: Customer;
  posts: Array<Order>;
  loading: boolean;
  error: string;
};

export const useCustomersStore = defineStore('customers', {
  state: () => (
    {
      customers: [],
      customer: undefined,
      posts: [],
      loading: false,
      error: ''
    } as CustomersState
  ),
  getters: {
    allCustomers: (state) => state.customers,
    currentCustomer: (state) => state.customer,
  },
  actions: {
    fetchCustomers() {
      this.customers = [];
      this.loading = true;
      return api.get('/users')
        .then((response) => {
          this.customers = response.data;
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
    fetchCustomer(customerId: number) {
      this.customer = undefined;
      this.loading = true;
      return api.get(`/users/${customerId}`)
        .then((response) => {
          this.customer = response.data;
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
  },
});

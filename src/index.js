import TableMendingVue from './components/TableMending.vue';
const install = (v) => {
  if (install.installed) return
  v.component('TableMendingVue', TableMendingVue)
}

export default install

export const components = {
  TableMendingVue
}
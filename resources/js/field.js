Nova.booting((app, store) => {
    app.component('index-nova-money-field', require('./components/IndexField').default);
    app.component('detail-nova-money-field', require('./components/DetailField').default);
    app.component('form-nova-money-field', require('./components/FormField').default);
})

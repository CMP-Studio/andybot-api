exports.seed = function (knex, Promise) {

    return knex("user").del().then(() => {
        return knex("user").insert([
            { fb_page_id: "1234567", name: "Abhishek" }
        ]);
    });
    
    // return knex("products").del()
    // .then(() => {
    //   return knex("merchants").del();
    // })
    // .then(() => {
    //   return knex("merchants").insert(merchantsData);
    // })
    // .then(() => {
    //   let productPromises = [];
    //   productsData.forEach((product) => {
    //     let merchant = product.merchant;
    //     productPromises.push(createProduct(knex, product, merchant));
    //   });
    //   return Promise.all(productPromises);
    // });
};
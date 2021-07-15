 const loadTestData = () =>{
let testData = {
    "categories":[{
        "id":1,
        "name":"Hot Drinks",
        "products":[ {
            "id":1,
            "cat_id":1,
            "name":"Assam Tea",
            "list_price":10,
            "tax":10
        },
        {
            "id":2,
            "cat_id":1,
            "name":"Darjeeling Tea",
            "list_price":160,
            "tax":10
        },
        {
            "id":3,
            "cat_id":1,
            "name":"Green Tea",
            "list_price":140,
            "tax":10
        },
        {
            "id":4,
            "cat_id":1,
            "name":"Masala Tea",
            "list_price":100,
            "tax":10
        }]
    },{
        "id":2,
        "name":"Cold Coffee",
        "products":[ {
            "id":5,
            "cat_id":2,
            "name":"Café Frappe",
            "list_price":160,
            "tax":15
        },
        {
            "id":6,
            "cat_id":2,
            "name":"Crunchy Frappe",
            "list_price":150,
            "tax":15
        },
        {
            "id":7,
            "cat_id":2,
            "name":"Tropical Iceberg",
            "list_price":120,
            "tax":15
        }]
    },{
        "id":3,
        "name":"Milk Shakes",
        "products":[{
            "id":8,
            "cat_id":3,
            "name":"Alphonso Mango Milkshake",
            "list_price":320,
            "tax":18
        },
        {
            "id":9,
            "cat_id":3,
            "name":"Classic Strawberry Milkshake",
            "list_price":300,
            "tax":18
        },
        {
            "id":10,
            "cat_id":3,
            "name":"Cocoa Cookie Milkshake",
            "list_price":250,
            "tax":18
        },
        {
            "id":11,
            "cat_id":3,
            "name":"Kesari Delight Milkshake",
            "list_price":200,
            "tax":18
        }]
    },{
        "id":4,
        "name":"Snack",
        "products":[{
            "id":12,
            "cat_id":4,
            "name":"Egg Wrap",
            "list_price":100,
            "tax":10
        },
        {
            "id":13,
            "cat_id":4,
            "name":"Garlic Bread",
            "list_price":180,
            "tax":10
        },
        {
            "id":14,
            "cat_id":4,
            "name":"Munch-On Nachos",
            "list_price":150,
            "tax":10
        },
        {
            "id":15,
            "cat_id":4,
            "name":"Veg Cutlet",
            "list_price":100,
            "tax":10
        },
        {
            "id":16,
            "cat_id":4,
            "name":"Veg Samosa",
            "list_price":50,
            "tax":10
        }]
    }

]
,
    "discount":[
        {
            "id":1,
            "disco_rule":[3, 5],
            "discount_on":[],
            "discount_unit":"%",
            "discount_value":10,
            "is_active":true
        },
        {
            "id":2,
            "disco_rule":[8,10],
            "discount_on":[8],
            "discount_unit":"%",
            "discount_value":30,
            "is_active":true
        }, {
            "id":3,
            "disco_rule":[1,13,16],
            "discount_on":[1],
            "discount_unit":"%",
            "discount_value":100,
            "is_active":true
        }
    ]
};
return testData;
}

export default loadTestData;

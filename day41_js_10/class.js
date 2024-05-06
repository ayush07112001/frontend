const data=[
    {id:1,
    category:'l',
    brand:'nike',
    price:15000,
    },
    {id:2,
     category:'small',
     price:10000,
     brand:'reebok',
    },
    {id:3,
     category:'xl',
     price:1000,
     brand:'zara',
     },
     {id:4,
     category:'small',
     price:10000,
     brand:'h&m',
       },
]
const result = data.filter((item)=>item.price>1000)
console.log("filter by price",result)
const result2 = data.filter((item)=>item.category=='l')
console.log("filter by category",result2)
const result3 = data.filter((item)=>item.brand=='zara')
console.log("filter by brand",result3)
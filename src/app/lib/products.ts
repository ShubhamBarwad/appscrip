
const domain = process.env.PRODUCTS_API_DOMAIN;
console.log(domain)

export async function getProducts() {
    const res = await fetch(`${domain}/products?limit=15`)
                    .then(res => res.json())
                    .then(data=>{
                        data[0].isNew = true;
                        data[1].isSoldout = true;
                        return data;
                    })
                    .catch(err=>err.message);
    return res;
}
import { OrdersItem , Amount, Discount} from "../model";

class OrdeerUtil{

    private amount : Amount = {subtotal:0, tax:0,total:0, saved:0};

    calculateOrderBill(discounts:[Discount], items:[OrdersItem]){
        if(!items.length){
            return ;
         }
        let activediscounts  = this.checkAndApplyDiscount(discounts,items);
        this.calculateAmount(activediscounts,items);
    }
    private checkAndApplyDiscount(discounts:[Discount], items:[OrdersItem]){
        let orderItesm = items.map(item => item.product_id);
        let activediscounts = discounts.filter(dis => {
            if(dis.is_active){
               return dis.disco_rule.every(ai => orderItesm.includes(ai))
            }
            return false;
        });
        // console.log("activediscounts ", activediscounts);
        return activediscounts;
    }


    private calculateAmount(discounts:any, items:[OrdersItem]){
      
        if(!items.length){
           return this.amount;
        }

        items.map(item =>{
            item.final_price = item.list_price;
            discounts.forEach((dis : Discount)=> {
                let applyToallItems = dis.discount_on.length <1 ;
                if(applyToallItems  && dis.disco_rule.indexOf(item.product_id) > -1){
                    item.discount = dis.discount_value;
                }else if(dis.discount_on.indexOf(item.product_id) > -1){
                    item.discount = dis.discount_value;
                } 

                if(item.discount){
                    item.final_price = item.list_price  - Math.round(item.list_price * item.discount/100); 
                }
               
            });
            item.total_price = item.final_price * item.quantity
            this.amount.subtotal += item.total_price;
            // console.log("tax ", item);
            // console.log("tax ", Math.round(item.total_price * item.tax/100));
            this.amount.tax += Math.round(item.total_price * item.tax/100); 
            this.amount.total = this.amount.subtotal + this.amount.tax;
            return item;
        })
        return this.amount;
    }
    getBillAmount(){
        return this.amount;
    }
}

export default OrdeerUtil;
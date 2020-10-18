import { create } from 'apisauce';

const api = create({
    baseURL: 'https://ifsc.razorpay.com/'
});

const GetBankDetails = (ifsc) => {
    // return new Promise((resolve,reject) => {
        api.get(`/${ifsc}`)
        .then(result => {
            console.log('api res ',result)
        });
    //})
}

export default GetBankDetails;
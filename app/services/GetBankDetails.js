import { create } from 'apisauce';

const api = create({
	baseURL: 'https://ifsc.razorpay.com/'
});

const GetBankDetails = ifsc => {
	return new Promise((resolve, reject) => {
		api.get(`/${ifsc}`).then(result => {
			const details = {
				status: result.status,
				data: result.data
			};
			resolve(details);
			reject('Unexpected Error occured');
		});
	});
};

export default GetBankDetails;

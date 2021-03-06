import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8081/api/v1/customers";

class CustomerService {

    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    createCustomers(customer){
        return axios.post(CUSTOMER_API_BASE_URL, customer);
    }

    getCustomerByUsername(username){
        return axios.get(CUSTOMER_API_BASE_URL+'/'+username)
    }

    getAllTickets(){
        return axios.get(CUSTOMER_API_BASE_URL+'/tickets');
    }

    getTicket(ticketId){
        return axios.get(CUSTOMER_API_BASE_URL+'/ticket/'+ticketId);
    }

}

export default new CustomerService()
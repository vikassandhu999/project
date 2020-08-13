import axios  from 'axios';

//default port address fro django on local machine
const BaseUrl = "http://127.0.0.1:8000/api";

export const RegisterWithPhone = (phone : string) : Promise<void> => {
    return new Promise((resolve , reject) => {
        let data = new FormData();
        data.append('phone' , phone);
        axios.post(`${BaseUrl}/register`, data
        ).then(response => {
            if (response.data.status == 200) {
            console.log(response);
            resolve();
        } 
        throw "Api Error"; 
        }).catch(error => {
            reject();
        });
    });
}

export const VerifyOtp = (phone : string , otp : string) : Promise<void>  => {
    return new Promise((resolve , reject) => {
        let data = new FormData();
        data.append('phone' , phone);
        data.append('otp' , otp);
        axios.post(`${BaseUrl}/verify`, data
        ).then(response => {
            if (response.data.status == 200) {
            console.log(response);
            resolve();
        } 
        throw "Api Error"; 
        }).catch(error => {
            reject();
        });
    });
}

export const MakeBooking = (
    name : string , 
    address : string , 
    date : string , 
    time :  string , 
    images : any , 
    phone : string , 
    misc : string
    ) : Promise<void>  => {
    return new Promise((resolve , reject) => {
        let data = new FormData();

        data.append('name' , name);
        data.append('address' , address);
        data.append('mobile_number' ,phone );
        data.append('date' , date+" "+time);
        data.append('img' , images);
        data.append('additional_info' , misc);
        axios.post(`${BaseUrl}/book`, data
        ).then(response => {
            if (response.data.status == 200) {
            console.log(response);
            resolve(response);
        } 
        throw "Api Error"; 
        }).catch(error => {
            reject();
        });
    });
}
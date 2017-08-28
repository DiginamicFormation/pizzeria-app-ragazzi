export default class UserService{

  constructor($http, $log, UrlService){
    this.$http = $http;
    this.$log = $log;
    this.UrlService = UrlService;
    this.tabUsers = [];
  }

//---------------------get All users--------------------
  getAllUsers(){
   return this.$http.get(this.UrlService.users)
   .then((res)=>{
     return res.data;
     this.$log.log("==>getAllUsers() OK !");
   },(err)=>{
     this.$log.log("==>ERR(getAllUsers): "+ err.status+'---' + err.statusText);
   })

  }
//-----------------Create Account-----------------------
  createAccount(account){
    this.account = {'email':account.email,
                    'password': account.password,'firstname': account.firstname,
                    'lastname': account.lastname,'adress': account.adress};
    this.$http({
      url: this.UrlService.users,
      method: 'POST',
      data: this.account
    }).then((res)=>{
      this.$log.log("==>created account OK ! :) "+ res.statusText);
       return res;
    },(err)=>{

      this.$log.log("==>ERR(createAccount): "+ err.status+'---' + err.statusText);
      return res;
    })


  }

}

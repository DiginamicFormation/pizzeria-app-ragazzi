export default class UserService{

  constructor($http, $log, $sessionStorage, UrlService, $location){
    this.$http = $http;
    this.$log = $log;
    this.$sessionStorage = $sessionStorage;
    this.UrlService = UrlService;
    this.$location = $location;
    this.tabUsers = [];
    this.userConnected = undefined;
    this.result = 'unknown';
    this.foundUser = false;
  }

//---------------------get All users--------------------
  getAllUsers(){
    return this.$http.get(this.UrlService.users)
   .then((res)=>{
     this.tabUsers = res.data;
     return res.data;
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

  verifyIfUserLogged(){
    if(this.$sessionStorage.get('userConnected') != undefined){
      this.$location.path('/home');
    }
  }
  //---------------Connect Account-----------------------
  connectAccount(acc){
  if(this.$sessionStorage.get('userConnected') == undefined){
      this.$log.log(this.$sessionStorage.get('userConnected'))
            this.getAllUsers();
            this.tabUsers.forEach((user)=>{
              if( (user.email === acc.email) && (user.password === acc.password) ){
                  this.userConnected = user;
                  this.$log.log("==> Infos loggin OK :D!");
                  this.foundUser = true;

                  this.$sessionStorage.put('userConnected', this.userConnected);
                    this.$log.log("You are connected !");
                    this.result = 'Connected ! :)';
                    this.$location.path('/home');
                    console.log(this.$sessionStorage.get('userConnected'))
              }
            })

            if(!this.foundUser){
                this.$log.log("==> Infos loggin failed :( !");
            }

  }
}

//--------------------getForgottentPassword-----------------------
  getForgottenPassword(account){
    this.$http.get(this.UrlService.users+'/?email='+ account.email)
    .then((res)=>{
      return res.data.password;
      this.$log.log('password oublié est : '+res.data.password)
      this.$log.log("Got forgotten password OK :D !" + err.status + ' ' + err.statusText)
    },(err)=>{
      this.$log.log("Problem technique ! "+ err.status + ' ' + err.statusText)
    })

  }
//-------------------change the page--------------------------------

changePage(link){
  if(link === 'newAccount'){
    this.$location.path('/createAccount');

  }else if(link === 'forgottenPasswords'){
    this.$location.path('/forgotPassword');
  }else if(link === 'login'){
    this.$location.path('/connectAccount');
  }


}





}

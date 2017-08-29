export default class UserService{

  constructor($http, $log, $sessionStorage, UrlService, $location){
    this.$http = $http;
    this.$log = $log;
    this.$sessionStorage = $sessionStorage;
    this.UrlService = UrlService;
    this.$location = $location;
    this.tabUsers = [];
    //this.userConnected = undefined;
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

                  this.foundUser = true;
                  this.$sessionStorage.put('userConnected',JSON.stringify(user))

                    this.$log.log("==> Infos loggin OK :D!");
                    this.$log.log("You are connected !");
                    this.$location.path('/home');
              }
            })

            if(!this.foundUser){
                this.$log.log("==> Infos loggin failed :( !");
            }

  }
}

//--------------------getForgottentPassword-----------------------

  getForgottenPassword(account){
    return this.$http.get(this.UrlService.users+'/?email='+ account.email)
  }


//-------------------Get userConnected-----------------------------
  getUserConnected(){

    if(JSON.parse(this.$sessionStorage.get('userConnected')) != undefined){
      try {
        this.userConnected = JSON.parse(this.$sessionStorage.get('userConnected'));
        this.$log.log ('Hi user :) '+this.userConnected.email + ' -- ' + this.userConnected.password);
        return this.userConnected;
      } catch (e) {
        this.$log.log ('error: '+ e.message);
      }
    }else{
      this.$log.log ('No user connected ! :(');
    }


  }



//-------------------change the page--------------------------------

changePage(link){

  if(link === 'newAccount'){
    this.$location.path('/createAccount');
  }else if(link === 'forgottenPasswords'){
    this.$location.path('/forgotPassword');
  }else if(link === 'login'){
    this.$location.path('/connectAccount');
  }else if(link === 'edit'){
    this.$location.path('/modifyAccount');
  }


}

}

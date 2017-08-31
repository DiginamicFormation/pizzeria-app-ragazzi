export default class UserService{

  constructor($http, $log, $sessionStorage, UrlService, $location, $timeout){
    this.$http = $http;
    this.$log = $log;
    this.$sessionStorage = $sessionStorage;
    this.UrlService = UrlService;
    this.$location = $location;
    this.tabUsers = [];
    this.result = undefined;
    this.foundUser = false;
    this.$timeout = $timeout;
  }

//---------------------get All users--------------------
  getAllUsers(){
    return this.$http.get(this.UrlService.users)
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

     this.$sessionStorage.put("userConnected", JSON.stringify(this.account));
     this.$timeout(()=>{
       this.$location.path('/home');
     }, 1500);

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
            this.getAllUsers()
            .then((res)=>{
              this.$log.log("getUsers" + res.statusText)
              this.tabUsers = res.data;
              this.tabUsers.forEach((user)=>{
                if( (user.email === acc.email) && (user.password === acc.password) ){

                    this.$sessionStorage.put('userConnected',JSON.stringify(user))
                    return this.foundUser = true;
                }
              })

              if(!this.foundUser){
                  this.$log.log("==> Infos loggin failed :(");

              }else{
                this.$log.log("==> You are connected :)");
                this.$timeout(()=>{
                 this.$location.path('/home');
               }, 2000);
              }
            },(err)=>{
              this.$log.log("err: " + err.statusText)

            })


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

//----------------------Modify account-----------------------------
  modifyAccount(account){

        return  this.$http.get(this.UrlService.users+'/'+ account.id)
          .then((res)=>{
            this.acc = res.data;
            this.acc.email = account.email;
            this.acc.password = account.password;
            this.acc.firstname = account.firstname;
            this.acc.lastname = account.lastname;
            this.acc.adress = account.adress;
            this.$sessionStorage.put('userConnected',JSON.stringify(this.acc))
          return this.$http({url : this.UrlService.users+'/'+ account.id, method: 'PUT', data: this.acc})

          },(err)=>{
            this.$log.log("err: "+ err.status + err.statusText)
          })
  }

removeUser(){
  this.$sessionStorage.remove("userConnected");
  this.$location.path("/home");
  //this.$root.reload();
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

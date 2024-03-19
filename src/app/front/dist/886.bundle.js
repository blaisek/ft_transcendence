"use strict";(self.webpackChunktranscendence=self.webpackChunktranscendence||[]).push([[886],{886:(e,n,s)=>{s.r(n),s.d(n,{default:()=>o});var a=s(397);const o=class extends a.default{constructor(e){super(e),this.setTitle("Signup"),this.registerUser=this.registerUser.bind(this)}async initialize(){const e=document.getElementById("signup-form");e?e.addEventListener("submit",this.registerUser):console.error("Form element not found")}async getHtml(){return'\n            <div class="background-section">\n                <div class="container">\n                    <div class="row">\n                        <div class="col-md-6 offset-md-3">\n                            <h2 class="text-center mt-5">Sign Up</h2>\n                            <div class="card my-5">\n                                <div class="card-body">\n                                    <form id="signup-form">\n                                        <div class="form-group">\n                                            <label for="username">Username</label>\n                                            <input type="text" class="form-control" name="username" placeholder="Enter username">\n                                        </div>\n                                        <div class="form-group">\n                                            <label for="email">Email address</label>\n                                            <input type="email" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email">\n                                        </div>\n                                        <div class="form-group">\n                                            <label for="password">Password</label>\n                                            <input type="password" class="form-control" name="password" placeholder="Password">\n                                        </div>\n                                        <div class="form-group">\n                                            <label for="confirmPassword">Confirm Password</label>\n                                            <input type="password" class="form-control" name="confirmPassword" placeholder="Confirm Password">\n                                        </div>\n                                        <button type="submit" class="btn btn-primary">Sign Up</button>\n                                        <p class="mt-3">\n                                            Already have an account? <a href="/login" class="nav__link" data-link>Login here</a>\n                                        </p>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        '}async registerUser(e){const n=window.location.hostname,s=e.target;console.log("Form Element:",s);const a=s.elements;for(let e of a)console.log(e.name,":",e.value);const o=new FormData(s);e.preventDefault(),console.log("submitttt");const r=new URLSearchParams(o);console.log(r.get("username"));try{const e=await fetch(`https://${n}/api/register/`,{method:"POST",body:r,headers:{"Content-Type":"application/x-www-form-urlencoded"}});e.ok?(console.log("Registration successful!"),window.location.href="/login"):400===e.status?alert("Invalid username or password. Please try again"):500===e.status?alert("This username is already taken. Please try a different one."):console.log("Registration failed!!!")}catch(e){console.log(e)}}}}}]);
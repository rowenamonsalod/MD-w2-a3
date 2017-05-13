"use strict";

class App{
	constructor(){
		//JSON Content
		this.users = [
			{
				"id":1,
				"usn":"admin",
				"password":"1234",
				"firstname":"Clyde",
				"lastname":"Balaman"
			},
			{
				"id":2,
				"usn":"15000871300",
				"password":"15000871300",
				"firstname":"Juan",
				"lastname":"Dela Cruz"
			},
			{
				"id":3,
				"usn":"15000779500",
				"password":"15000779500",
				"firstname":"Andres",
				"lastname":"Bonifacio"
			}
		];

		this.lockers = [
			{
				"id":1,
				"number":"001",
				"rate": "20.00"				
			},
			{
				"id":2,
				"number":"002",
				"rate": "20.00"				
			},
			{
				"id":3,
				"number":"003",
				"rate": "20.00"				
			},
			{
				"id":4,
				"number":"004",
				"rate": "20.00"				
			},
			{
				"id":5,
				"number":"005",
				"rate": "20.00"				
			},
			{
				"id":6,
				"number":"006",
				"rate": "20.00"				
			},
			{
				"id":7,
				"number":"007",
				"rate": "20.00"				
			},
			{
				"id":8,
				"number":"008",
				"rate": "20.00"				
			},
			{
				"id":9,
				"number":"009",
				"rate": "20.00"				
			},
			{
				"id":10,
				"number":"010",
				"rate": "20.00"				
			},
			{
				"id":11,
				"number":"011",
				"rate": "20.00"				
			},
			{
				"id":12,
				"number":"012",
				"rate": "20.00"				
			},
			{
				"id":13,
				"number":"013",
				"rate": "20.00"				
			},
			{
				"id":14,
				"number":"014",
				"rate": "20.00"				
			},
			{
				"id":15,
				"number":"015",
				"rate": "20.00"				
			},
			{
				"id":16,
				"number":"016",
				"rate": "20.00"				
			}
		];

		this.settings={
			"current_user":{}
		};
		
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	initializeMaterialScripts(){
		$(function(){
			$('.button-collapse').sideNav({
				menuWidth: 300, // Default is 300
				edge: 'right', // Choose the horizontal origin
				closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
				draggable: true // Choose whether you can drag to open on touch screens
			});

			$('ul.tabs').tabs();		
		});		
	}

}

class Component extends App{
	constructor(){
		
		super();
	}

	loginPage(){
		let html = `
			<h3 class="app_name">Locker App</h3>
			<h6 class="app_desc">A Hybrid Demo App</h6>
			<div class="center-align">
				<img class="app_logo" src="img/uic.jpg" />
			</div>
			<div class="login_input">
				<div class="row">				
					<div class="col s12 center-align">
						<input id="txtUSN" style="background-color:#303030;color:white;width:80%;padding-left:15px;padding-right:15px;font-size:18px;text-align:center;" maxlength="11" type="text" placeholder="ENTER USN" />
					</div>
					<div class="col s12 center-align">
						<input id="txtPASS" style="background-color:#303030;color:white;width:80%;padding-left:15px;padding-right:15px;font-size:18px;text-align:center;" maxlength="20" type="password" placeholder="ENTER PASSWORD" />
					</div>
					<div class="col s12 center-align">
						<button onclick="component.verifyLogin()" class="waves-effect waves-light btn" >LOGIN</button>
					</div>
				</div>				
			</div>
		`;
		this.reRender(html,$('#app')[0]);
	}

	verifyLogin(){
		let txtUSN = $('#txtUSN').val();
		let txtPASS = $('#txtPASS').val();
		let msg = "Invalid Account";
		let errFlag = true;
		// console.log(this.users);
		for(let i=0;i<this.users.length;i++){
			// console.log(this.users[i].usn);
			if(txtUSN==this.users[i].usn){
				if(txtPASS==this.users[i].password){
					errFlag = false;
					this.settings.current_user = this.users[i];					
					break;
				}
				else{
					errFlag = true;
					msg = "Invalid Password";
				}
			}
			else{
				errFlag = true;				
			}
		}		


		if(errFlag){
			Materialize.toast(msg, 4000);
		}
		else{
			this.preloader();
			setTimeout(function(){
				component.studentDashboard();
			},1000);
		}		
	}

	studentDashboard(){		
		let html = `			
			<div id="mainNav"></div>
			<div id="sideNav"></div>
		`;
		this.reRender(html,$('#app')[0]);
		$('html, body').css('background-color', '#fff');
		this.mainNav();
		this.sideNav();
		this.initializeMaterialScripts();
	}

	mainNav(){
		let html = `
			<div class="row">
				<div class="col s12">
					<ul class="tabs">
						<li class="tab col s3"><a class="active" href="#page1"><i class="material-icons">home</i></a></li>
						<li class="tab col s3"><a href="#page2"><i class="material-icons">home</i></a></li>
						<li class="tab col s3"><a href="#page3"><i class="material-icons">home</i></a></li>
						<li class="tab col s3 disabled"><a href="#page4" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a></li>
					</ul>
				</div>
				<div id="page1" class="col s12"></div>
				<div id="page2" class="col s12">Test 2</div>
				<div id="page3" class="col s12">Test 3</div>
				<div id="page4" class="col s12"></div>
			</div>
		`;
		this.reRender(html,$('#mainNav')[0]);
		this.page1();
	}

	sideNav(){
		let html = `
			<ul id="slide-out" class="side-nav">
				<li><div class="userView">
					<div class="background">
						<img src="img/office.jpg">
					</div>
					<a href="#!user"><img class="circle" src="img/yuna.jpg"></a>
					<a href="#!name"><span class="white-text name">${this.settings.current_user.firstname}</span></a>
					<a href="#!email"><span class="white-text email">${this.settings.current_user.usn}</span></a>
				</div></li>
				<li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
				<li><a href="#!">Second Link</a></li>
				<li><div class="divider"></div></li>
				<li><a class="subheader">Subheader</a></li>
				<li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
			</ul>
		`;
		this.reRender(html,$('#sideNav')[0]);
	}

	preloader(){
		let html= `
			<center style="margin-top:50%;">
			<div class="preloader-wrapper big active">
			<div class="spinner-layer spinner-blue">
			<div class="circle-clipper left">
			<div class="circle"></div>
			</div><div class="gap-patch">
			<div class="circle"></div>
			</div><div class="circle-clipper right">
			<div class="circle"></div>
			</div>
			</div>

			<div class="spinner-layer spinner-red">
			<div class="circle-clipper left">
			<div class="circle"></div>
			</div><div class="gap-patch">
			<div class="circle"></div>
			</div><div class="circle-clipper right">
			<div class="circle"></div>
			</div>
			</div>

			<div class="spinner-layer spinner-yellow">
			<div class="circle-clipper left">
			<div class="circle"></div>
			</div><div class="gap-patch">
			<div class="circle"></div>
			</div><div class="circle-clipper right">
			<div class="circle"></div>
			</div>
			</div>

			<div class="spinner-layer spinner-green">
			<div class="circle-clipper left">
			<div class="circle"></div>
			</div><div class="gap-patch">
			<div class="circle"></div>
			</div><div class="circle-clipper right">
			<div class="circle"></div>
			</div>
			</div>
			</div>
			</center>
		`;
		this.reRender(html,$('#app')[0]);
	}

	page1(){
		let html = `
			<nav>
				<div class="nav-wrapper">
					<form>
						<div class="input-field">
							<input id="search" type="search" required>
							<label class="label-icon" for="search"><i class="material-icons">search</i></label>
							<i class="material-icons">close</i>
						</div>
					</form>
				</div>
			</nav>

			<div class="collection" id="lockerList"></div>
		`;
		this.reRender(html,$('#page1')[0]);
		this.lockerList(0);
	}

	lockerList(start){
		let items_pergroup = 5;
		let items_total = this.lockers.length;
		let html=``;
		let end;
		let item=start;
		while(item<items_total){
			if(item==(start+items_pergroup))break;
			html+=`
				<a href="#!" onclick="console.log('asdf')" class="collection-item avatar hoverable">
						<img src="img/yuna.jpg" alt="" class="circle">
						<span class="title">Locker ${this.lockers[item].number}</span>
						<p>
							<div id="">Lastname, Firstname</div>
							<div id="">3 months left</div>						
						</p>
				</a>
			`;
			item++;			
		}
		html+=`
			<ul class="pagination center-align">
				<li class="waves-effect"><a href="#!" onclick="component.lockerList(0)"><i class="material-icons">chevron_left</i></a></li>
			`;

		let page = 1;
		let page_start;	
		for(let i=0;i<items_total;i++){
			page_start = ((items_pergroup*page)-(items_pergroup));
			if((i%items_pergroup)==0){
				let active="";
				if((page_start)==start){active="active";}
				html +=`
					<li class="waves-effect ${active}" onclick="component.lockerList(${page_start})">
						<a href="#!">${page++}</a>
					</li>
				`;
			}
		}
		html +=`
				<li class="waves-effect"><a href="#!" onclick="component.lockerList(${page_start})"><i class="material-icons">chevron_right</i></a></li>
			</ul>
		`;
		this.reRender(html,$('#lockerList')[0]);
	}
}

let component = new Component();
component.loginPage();		
// component.studentDashboard();





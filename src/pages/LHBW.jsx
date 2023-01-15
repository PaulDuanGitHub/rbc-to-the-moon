import { Component } from "react";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { NavLink } from "react-router-dom";
import QRComponment from "./QRComponenet";
import "./LHBW.css"

class LHBW extends Component {
	state = { open1: false, open2: false, open3: false, open4: false }
	render() {
		return (<div>
			<h4 className="title1">
				Learn how banking works <br />
			</h4>

			<h9 className="blurb">
				Since banking in Canada may be quite different from banking back home, we’ve put together some information to help you get familiar with how it works here:
			</h9>
			<div className="learn-collapses">
				<div>
					<Button
						onClick={() => this.setState({ open1: !this.state.open1 })}
						aria-controls="example-collapse-text"
						aria-expanded={this.state.open1}
						className="collapse-btn"
					// className="bankacctypes"
					>
						Bank Account Types
					</Button>
					<Collapse in={this.state.open1}>
						<div className="collapse-text">
							Chequing Account<br />
							- Day-to Day banking<br />
							- Paying bills<br />
							- Deposit / Withdraw money<br />
							Savings Account<br />
							- Account balances earn interest<br />
							- Easily access your money when you need it<br />
						</div>
					</Collapse>
				</div>
				<div>
					<Button
						onClick={() => this.setState({ open2: !this.state.open2 })}
						aria-controls="example-collapse-text"
						aria-expanded={this.state.open2}
						className="collapse-btn"
					// className="cheques"
					>
						How Cheques Work in Canada
					</Button>
					<Collapse in={this.state.open2}>
						<div className="collapse-text">
							Cheques are a convenient way to make a payment from your account when cash, debit or credit is not an option.<br />
							Many of RBC's bank accounts include cheques for free.
						</div>
					</Collapse>
				</div>
				<div>
					<Button
						onClick={() => this.setState({ open3: !this.state.open3 })}
						aria-controls="example-collapse-text"
						aria-expanded={this.state.open3}
						className="collapse-btn"
					// className="debit"
					>
						Using a Debit Card (or Client Card)
					</Button>
					<Collapse in={this.state.open3}>
						<div className="collapse-text">
							When you open a bank account with us, you will recieve a debit card.<br />
							the RBC Royal Bank Client Card lets you conveniently and securely access your money from bank branches and ATMs, and through online, mobile and telephone banking.
						</div>
					</Collapse>
				</div>
				<div>
					<Button
						onClick={() => this.setState({ open4: !this.state.open4 })}
						aria-controls="example-collapse-text"
						aria-expanded={this.state.open4}
						className="collapse-btn"
					// className="account"
					>
						Accessing Your Accounts
					</Button>
					<Collapse in={this.state.open4}>
						<div className="collapse-text">
							Ways to Access your Accounts<br />
							- Online, Telephone and Mobile Banking<br />
							- ATMs (RBC has over 4200 ATMs across Canada)<br />
							- Bank Branches
						</div>
					</Collapse>
				</div>
			</div>
			{/* 
      <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Bank account types
                </Dropdown.Toggle>

                <Dropdown.Menu>
                   hi
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    How cheques work in Canada
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="Bank account types">Bank account types</Dropdown.Item>
                    <Dropdown.Item href="How cheques work in Canada ">How cheques work in Canada </Dropdown.Item>
                    <Dropdown.Item href="Using a debit card in Canada ">Using a debit card in Canada </Dropdown.Item>
                    <Dropdown.Item href="Accessing your accounts">Accessing your accounts </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Using a debit card in Canada
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="Bank account types">Bank account types</Dropdown.Item>
                    <Dropdown.Item href="How cheques work in Canada ">How cheques work in Canada </Dropdown.Item>
                    <Dropdown.Item href="Using a debit card in Canada ">Using a debit card in Canada </Dropdown.Item>
                    <Dropdown.Item href="Accessing your accounts">Accessing your accounts </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Accessing your accounts
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="Bank account types">Bank account types</Dropdown.Item>
                    <Dropdown.Item href="How cheques work in Canada ">How cheques work in Canada </Dropdown.Item>
                    <Dropdown.Item href="Using a debit card in Canada ">Using a debit card in Canada </Dropdown.Item>
                    <Dropdown.Item href="Accessing your accounts">Accessing your accounts </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
      */}
			{<h1><NavLink to="/lang"><Button size='lg' className="backtohome" variant="Back to Home Page" onClick={this.test}>Back to Home Page</Button></NavLink></h1>}
			<QRComponment></QRComponment>
		</div>);
	}
}

export default LHBW
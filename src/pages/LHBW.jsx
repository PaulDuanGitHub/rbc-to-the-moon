import { Component } from "react";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { NavLink } from "react-router-dom";
import QRComponment from "./QRComponenet";
import "./LHBW.css"
import { withTranslation } from "react-i18next";
class LHBW extends Component {
	state = { open1: false, open2: false, open3: false, open4: false }
	render() {
		return (<div>
			<h4 className="title1">
			{this.props.t("Learn How Banking Works in Canada")} <br />
			</h4>

			<h9 className="blurb">
				{this.props.t("Since banking in Canada may be quite different from banking back home, we’ve put together some information to help you get familiar with how it works here:")}
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
						{this.props.t("Bank Account Types")}
					</Button>
					<Collapse in={this.state.open1}>
						<div className="collapse-text">
							{this.props.t("Chequing Account")}<br />
							- {this.props.t("Day-to Day banking")}<br />
							- {this.props.t("Paying bills")}<br />
							- {this.props.t("Deposit / Withdraw money")}<br />
							{this.props.t("Savings Account")}<br />
							- {this.props.t("Account balances earn interest")}<br />
							- {this.props.t("Easily access your money when you need it")}<br />
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
						{this.props.t("How Cheques Work in Canada")}
					</Button>
					<Collapse in={this.state.open2}>
						<div className="collapse-text">
							{this.props.t("Cheques are a convenient way to make a payment from your account when cash, debit or credit is not an option. Many of RBC's bank accounts include cheques for free.")}
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
						{this.props.t("Using a Debit Card (or Client Card)")}
					</Button>
					<Collapse in={this.state.open3}>
						<div className="collapse-text">
						{this.props.t("When you open a bank account with us, you will receive a debit card. The RBC Royal Bank Client Card lets you conveniently and securely access your money from bank branches and ATMs, and through online, mobile and telephone banking.")}
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
						{this.props.t("Accessing Your Accounts")}
					</Button>
					<Collapse in={this.state.open4}>
						<div className="collapse-text">
							{this.props.t("Ways to Access your Accounts")}<br />
							- {this.props.t("Online, Telephone and Mobile Banking")}<br />
							- {this.props.t("ATMs (RBC has over 4200 ATMs across Canada)")}<br />
							- {this.props.t("Bank Branches")}
						</div>
					</Collapse>
				</div>
			</div>
			<QRComponment></QRComponment>
		</div>);
	}
}

export default withTranslation()(LHBW)
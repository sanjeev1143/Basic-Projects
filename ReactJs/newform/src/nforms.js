import React, { Component } from 'react'

export class Nforms extends Component {
    constructor() {
        super()
        this.state = {
            Fname: '',
            Lname: "",
            Roll_no: "",
            College_Name: "",
            Gender: "",
            Courses: "Angular",
            cbox: "false"
        }
        this.changeit = this.changeit.bind(this)
        this.did = this.did.bind(this)
    }

    changeit(event) {
        let a = parseInt(event.target.id);
        console.log(event.target)
        if (a === 1)
            this.setState({
                Fname: event.target.value
            })
        else if (a === 2)
            this.setState({
                Lname: event.target.value
            })
        else if (a === 3)
            this.setState({
                Roll_no: event.target.value
            })
        else if (a === 4)
            this.setState({
                College_Name: event.target.value
            })
        else if (a === 5)
            this.setState({
                Gender: event.target.value
            })
        else if (a === 6)
            this.setState({
                Courses: event.target.value
            })
    }
    did(event) {
        alert(`Thank you ${this.state.Fname}, your course ${this.state.Courses} will be enrolled soon. `)
        event.preventDefault();
    }

    render() {


        return (
            <div className='box'>
                <form onSubmit={this.did}>
                    <fieldset>
                        <legend>Fill Up</legend>
                        <div className='item'>
                            <label className='in'>Fname::  </label >
                            <input className='Fname' id='1' type="text" value={this.state.Fname} onChange={this.changeit} />
                        </div>
                        <div className='item'>
                            <label className='in' >Lname::</label>
                            <input className='in' id='2' type="text" value={this.state.Lname} onChange={this.changeit} />
                        </div>
                        <div className='item'>
                            <label className='in' >Roll no::</label>
                            <input className='in' id='3' type="text" value={this.state.Roll_no} onChange={this.changeit} />
                        </div>
                        <div className='item'>
                            <label className='in' >College Name::</label>
                            <input className='in' id='4' type="text" value={this.state.College_Name} onChange={this.changeit} />
                        </div>
                        <div className='item'>
                            <label className='in' >Gender::</label>
                            <input className='in' id='5' type="text" value={this.state.Gender} onChange={this.changeit} />
                        </div>
                        <div className='item'>
                            <label className='in' >Courses::</label>
                            <select id='6' value={this.state.Courses} onChange={this.changeit}>
                                <option value="React">React</option>
                                <option value="Angular">Angular</option>
                                <option value="NodeJs">NodeJs</option>
                                <option value="Mongodb">Mongodb</option>
                            </select>
                        </div>
                        <div >

                            <input className='in' type="checkbox" />
                            <label className='in' >I'm not a robot </label>
                        </div>
                        <div className='item'>
                            <button type='submit' >Submit</button>
                        </div>
                    </fieldset>
                </form>


            </div>
        )
    }
}

export default Nforms

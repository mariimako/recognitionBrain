import React from 'react';

const Signin = ({onRouteChange}) => {
    return (
        <article className="br3 b--black-10 ba mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" for="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input 
                    onClick = {() => onRouteChange('home')} // arrow function allows to run only when clicked, not when rendered
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Sign in" 
                    />
                    </div>
                    <div className="lh-copy mt3">
                    <p onClick= {() => onRouteChange('register')} className="f6 link dim black db pointer f6 dib">Register</p>
                    </div>
                </form>
            </main>
        </article>
    )
}

export default Signin;
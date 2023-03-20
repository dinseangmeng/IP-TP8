<template>
    <form action="#">
        <fieldset>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account</p>
            <hr>
            <div class="input">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter email">
            </div>
            <div class="input">
                <label for="usr">Username</label>
                <input type="text" id="usr" placeholder="Username">
            </div>
            <div class="input">
                <label for="fn">First Name</label>
                <input type="text" id="fn" placeholder="First Name">
            </div>
            <div class="input">
                <label for="ln">Last Name</label>
                <input type="text" id="ln" placeholder="Last Name">
            </div>
            <div class="input">
                <label for="pwd">Password</label>
                <input type="password" id="pwd" placeholder="Create your Password">
            </div>
            <p class="tc">By create an account you agree to our <a href="#">Terms & Privacy</a></p>
            <div class="input">

                <input type="submit" value="Login" >
            </div>

        </fieldset>
        
    </form>
</template>

<script setup>

</script>

<style lang="scss" scoped>
form{
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    --text-color:#3c3c3c;
    fieldset{
        --border-color:#e8e8e8;
        color: var(--text-color);
        padding: 1rem;
        width: 100%;
        display: flex;
        // justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        border: 2px solid var(--border-color);
        border-bottom: 1rem solid var(--border-color);
        border-radius: 2px;
        &> *{
            width: 100%;
        }
        img{
            width: 12rem;
            aspect-ratio: 1/1;
            
            object-fit: cover;
            border-radius: 50%;
            overflow: hidden;
            
        }
        .input{
            width: 100%;
            display: flex;
            flex-direction: column;
            border: none;
            outline: none;
            color: var(--text-color);
            input{
                padding: .6rem .5rem;
                &::placeholder{
                    font-family: 'Koulen', cursive;
                }
                &[type=submit]{
                    width: 50%;
                    background-color: var(--base);
                    cursor: pointer;
                    outline: none;
                    border: none;
                    font-family: 'Koulen', cursive;
                    font-size: 1rem;
                    color: white;
                    transition: 250ms;
                    &:hover{
                        opacity: .8;
                    }
                }
            }
        }
    }
    .tc{
        width: 100%;
        text-align: left;
        a{
            color:var(--base);
            text-decoration: none;
        }
    }
}
</style>
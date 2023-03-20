<template>
    <form action="#">
        <fieldset>
            <img src="../../public/User_login_avata.jpg" alt="Avatar">
            <div class="input">
                <label for="email">Username or Email</label>
                <input type="text" id="email" placeholder="Enter email">
            </div>
            <div class="input">
                <label for="pwd">Password</label>
                <input type="password" id="pwd" placeholder="Enter Password">
            </div>
            <div class="input">

                <input type="submit" value="Login" >
            </div>

        </fieldset>
        <p class="fgp">Forgot <a href="#">password ?</a></p>
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
    fieldset{
        --border-color:#e8e8e8;
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
            input{
                padding: .6rem .5rem;
                &::placeholder{
                    font-family: 'Koulen', cursive;
                }
                &[type=submit]{
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
    .fgp{
        width: 100%;
        text-align: right;
        a{
            color:var(--base);
            text-decoration: none;
        }
    }
}
</style>
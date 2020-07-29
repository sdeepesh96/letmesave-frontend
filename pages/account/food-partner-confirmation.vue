<template>
    <div class="login-page-inner">  
        <v-container>
            <div class="registration-section">
                <div class="confirmation-inner">
                    <h2>AWESOME</h2>
                    <p>Thank you for registering as a food partner at Letme-save.com</p>
                    <img src="~/assets/registation_complete.png" alt="registation_complete">
                    <p style="margin-top: 2em;">You will be able to login after account verification</p>
                    <v-btn rounded color="#104388" x-large dark class="login-sub" to="/">Go to home</v-btn>
                </div>
            </div>
        </v-container>
    </div>
</template>

            
            
<style scoped>
p{
    color: #3b3b3b;
    font-weight: 500;
    margin-bottom: 1.5em;
    font-size: 18px;
    line-height: 1.2;
}
.confirmation-inner>h2 {
    color: #24b149;
    font-weight: 500;
    font-size: 26px;
    line-height: 1.2;
}
.login-page-inner{
    background: #eaedf4;
}
.registration-section {
    text-align: center;
    background: #fff;
    padding: 4em 2em 3em;
    margin: 1em 0 1.5em;
    border-radius:10px;
}
.confirmation-inner img {
    width: 100%;
}
.confirmation-inner {
    max-width: 400px;
    margin: auto;
}
a.login-sub {
    margin-bottom: .5em;
    width: 250px;
    text-transform: capitalize;
    font-size: 24px !important;
    font-weight: 500;
    margin-top:1em;
}

</style>
<template>

    <div class="banner-search">
        <v-form style="text-align:center">
            <v-container>
                <v-row>
                    <v-col cols="12" sm="1"></v-col>
                    <v-col cols="12" sm="10">
                        
                        <div class="banner-form">
                            <v-radio-group  row>
                                <v-radio color="#fff" dark label="Save surplus food" value="radio-1"></v-radio>
                                <v-radio color="#fff" dark label="Sale food offers" value="radio-2"></v-radio>
                            </v-radio-group>
                            <div class="banner-form-in">
                                
                                <div>
                                    <v-text-field
                                            solo
                                            hide-details
                                            label="Enter Location"
                                            height="47px"
                                            append-icon="mdi-image-filter-center-focus"
                                            class="location"
                                        ></v-text-field>
                                </div>
                                <div class="banner-form-inner">
                                    <div>
                                        <v-select
                                        label="Dinner"
                                        hide-details
                                        dense
                                        solo
                                        height="47px"
                                        ></v-select>
                                    </div>
                                    <div>
                                        <v-select
                                        label="Pick any time this week"
                                        hide-details
                                        dense
                                        solo
                                        height="47px"
                                        ></v-select>
                                    </div>
                                    <div>
                                        <v-btn min-width="100%"  small min-height="47px" color="#104388" to="/listing" dark>Search</v-btn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="1"></v-col>
                </v-row>
            </v-container>
        </v-form>
        <div class="banner-text">
            <h4>Discover your perfect save food!</h4>
            <p> Discover our 50,000+ surplus food offers</p>
        </div>
    </div>
</template>

<style scoped>
.banner-search .col-sm-8, .banner-search .col-sm-2, .banner-search .col-sm-4{
    padding: 0 7px;
}
.v-input--dense > .v-input__control > .v-input__slot {
    min-height: 47px !important;
}
.banner-form-inner {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 1em;
    margin-top: 10px;
}
.v-btn.v-size--small{
        text-transform: unset;
        font-size: 16px;
        font-weight: 400;
    }
.location .v-text-field__details {
    display: none;
}
.banner-form{
    margin: 10% 0 3%;
    
}
.banner-form-in{
    padding: 10px;
    background: #ffffff4d;
    
}
.banner-search {
    background: #ebedf3;
    background-image: url("../assets/Banner.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.banner-form .v-input--radio-group.v-input--radio-group--row .v-radio {
    margin-right: 45px;
}

.banner-text h4{
    text-align: center;
    color: #ffffff;
    font-size: 38px;
    font-weight: 300;
}
.banner-text p{
    text-align: center;
    color: #ffffff;
    font-size: 22px;
    font-weight: 300;
}
.banner-text {
    padding-bottom: 7%;
}
@media (max-width: 767px) {
        .banner-form .v-input--radio-group.v-input--radio-group--row .v-radio {
        margin-right: 10px;
        }
        .banner-text h4{
            font-size: 24px;
        }
        .banner-text p{
            font-size: 16px;
        }
        .banner-text {
            padding-bottom: 15%;
        }
    }
</style>

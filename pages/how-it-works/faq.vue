<template>
  <div class="mission-content">
    <InnerBanner />
    <v-container>
      <v-breadcrumbs :items="items">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item
            :href="item.href"
            :disabled="item.disabled"
            class="inner-breadcrumbs"
          >{{item.text}}</v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </v-container>
    <v-card>
      <v-tabs background-color="#fb6c05" centered dark icons-and-text v-model="tab">
        <v-tab>
          Food partner
          <v-icon>mdi-food</v-icon>
        </v-tab>
        <v-tab>
          User
          <v-icon>mdi-account</v-icon>
        </v-tab>
        <v-tab>
          Marketing partner
          <v-icon>mdi-store</v-icon>
        </v-tab>
        <v-tab>
          Hosts
          <v-icon>mdi-access-point</v-icon>
        </v-tab>
        <v-tab>
          Volunteers
          <v-icon>mdi-human-handsup</v-icon>
        </v-tab>
        <v-tab>
          Green awareness program
          <v-icon>mdi-pine-tree</v-icon>
        </v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-container>
                <v-row justify="center">
                  <v-expansion-panels hover v-model="panel" focusable>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">Who can be a food partner?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Any food business places such as hotels, restaurants, bakeries, super markets, school/college/university canteens, kiosks, gas station shops, fast food shops, fresh produce farms etc. It is 100% free to join as a food partner member, and 100% free to post ads.</p>
                        <p>By using Letme-save.com food partner helps – to earn extra revenue, to achieve zero food waste and save the earth from carbon emissions, and to avoid feeling guilty to throw the food.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >How to become a food partner member at Letme-save.com?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>
                          <nuxt-link
                            to="/how-it-works/information-for-food-partners"
                          >Click Information for food partners…</nuxt-link>
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >As a food partner, can I cancel user’s purchase order?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Yes. You can cancel the user order at any time before 2 hours of the pick-up time or dine-in time. Refer more details on the food partner agreement.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-container>
                <v-row justify="center">
                  <v-expansion-panels hover v-model="panel" focusable>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">Who can be a user?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Any food consumers such as locals, local and international travelers, students, unions, groups and any individuals can be a user. It is 100% free to join as a user member.</p>
                        <p>Users can find and buy food deals from both Letme-save.com android/iOS apps and website as a guest user or member users.</p>
                        <p>By using Letme-save.com users help – to save their own money, to achieve zero food waste by saving surplus food, and to save mother earth by avoiding carbon emissions from food wastes and its landfill.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">How to become a user member at Letme-save.com?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>
                          <nuxt-link
                            to="/how-it-works/information-for-users"
                          >Click Information for users…</nuxt-link>
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >Why should I use Letme-save.com, and save surplus food in my area?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Because it offers a self-satisfaction to every single person by increasing their respect i. for food, ii. for the farmers who produce it, iii. for the natural resources that go into producing it and iv. for the people who go without it.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">As a user, can I cancel my order and get refund?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Yes. You can cancel your order at any time before 2 hours of the pick-up time or dine-in time. You will get full refund.</p>
                        <p>If you forget to cancel before 2 hours and/or if you forget to go and pick-up the food on the mentioned pick-up time, then you do not have rights to cancel and/or get refund.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >As a user, if I have allergies for some food ingredients, what should I do?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Before or after order your food, it is your 100% responsibility to contact the corresponding food partner and make sure about the food ingredients regarding your allergies. Letme-save.com is not responsible for any of your allergic reactions.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-container>
                <v-row justify="center">
                  <v-expansion-panels hover v-model="panel" focusable>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >Who can be a marketing partner or marketing ambassador of Letme-save.com?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Any individuals, students, student groups, student unions and existing companies can become our marketing partner of Letme-save.com in your area.</p>
                        <p>Not only companies, even individuals can franchise Letme-save.com in their region after they reach certain sales through the food partners in their area. It means they can have increased commissions, regular income and responsible for increased regional area/team.</p>
                        <p>There are no deposits, no registration fee, and it is completely free.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >How to become a marketing partner at Letme-save.com?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>
                          <nuxt-link to="/how-it-works/earn-with-us">Click Earn with us…</nuxt-link>
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >What is Letme-save.com marketing partnership cooperation program?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>
                          <nuxt-link to="/how-it-works/earn-with-us">Click Earn with us…</nuxt-link>
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >Why you should consider becoming our Marketing Partner?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>
                          We are Norway's largest competence environment with international brand name in food waste fighting
                          and providing food sale offers to locals, travelers and different consumers.
                          Do you see opportunities in becoming our partner and to promote Letme-save.com
                          in your area through network strategy or digital marketing? We would like to
                          welcome you and invite you to contact us. Maybe we can help with good advice,
                          important experiences and proven cooperation models.
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">Who can become our marketing partner?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Any individuals, students, student groups, student unions and existing companies can become our marketing partner.</p>
                        <p>Not only companies, even individuals can franchise Letme-save.com in their region after they reach certain sales through their partners. It means they can have increased commissions, regular income and responsible for increased regional area/team.</p>
                        <p>There are no deposits, no registration fee, and it is completely free.</p>
                        <p>But you should have self-initiative spirit, self-discipline, passion towards marketing and passive income, sincerity and seriousness in the tasks execution, commitment and loyalty.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">What you have to invest, and what you will get?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Your time-investment with a proper promotion strategy can be a short period of time in your area but its constant passive payoff can be substantial. You should know the truth that typical marketing takes time to take effect. But Letme-save.com is a straightforward one.</p>
                        <p>You should decide “Do you really want, and can you really do it?”. Once you get matured yes from yourself then go for it.</p>
                        <p>You do not invest any money. You introduce new food partner members with your agent reference number, plus you introduce Letme-save.com to new food consumers through your social media, network and words of mouth – where you are living or studying or working as a part-time or full-time.</p>
                        <p>Whatever, your partners sell then you will get 3-5% of the commission. You will have your own Letme-save.com partner login. You can see who you introduced, what are their sales, and what is your commission every month. Once you establish the good customer base for those partners who you introduced then you will receive regular passive income. If you got promoted to franchisee Letme-save.com in your region then your commission will be higher.</p>
                        <p>Remember, Letme-save.com values active businesses and marketing partners. If there are no sales from your introduced partners consecutively for the 3-6 months then Letme-save.com will revoke them from “marketing partner status”. Again, you can apply to reactivate your account with acceptable reasons.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">Who we are looking for?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>We are looking for result oriented partners with commitment - attend regular online meetings and reporting us about the progress in their area. The key to the success is to put a marketing effort in a steady motion with a result-oriented written goals and let it run, evaluating the outcome and tweaking the campaign when need be.</p>
                        <p>First, you practice your dialogues, refer our youtube tips, then go and introduce the concept in the field of restaurants/food businesses, explain what benefits they will get, it is 100% free, and not bad to give a try.</p>
                        <p>Second, you spread about Letme-save.com among your friends, free-to use and their big savings while buying food etc.</p>
                        <p>Stopping and starting marketing doesn't give you enough return of efforts, and you will never got to know whether your effort is working or not.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >How to become a successful marketing partner of Letme-save.com?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>First, you need a marketing plan:</p>
                        <p>Without a written marketing plan, your committment is making decisions on the fly. This results in disjointed marketing efforts, wasting time and resources on activities that may or may not work for your area. When your plan is written down, you become more focused.</p>
                        <p>Second, you need an execution plan, attend 1-to-1 meetings and discuss about the progress:</p>
                        <p>In addition to committing your goals, strategies and activities to a written document which is the only way to avoid losing sight of what you want to achieve, it is important to execute plans.</p>
                        <p>Turning your ideas into proven reality - Execute the plans and attend annual wheel meetings.</p>
                        <p>We will help you all the way through our three level co-operation strategies.</p>
                        <p>Tip: If you want your marketing to be effective, and earn big income regularly, you need to treat marketing as a process – a series of actions to achieve your particular marketing goal.</p>
                        <p>The key to success is implementing an effective marketing approach to ensure it aligns with your marketing plan and defines the steps you will take to implement a successful Letme-save.com promotion.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">Who are we?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>
                          Letme-save.com is a Food Marketing & Food Advertising platform (mobiles apps and website) for all kind
                          of businesses such as Restaurants, Hotels, Supermarkets, Grocery Stores, Kiosks, Bakeries, Food
                          Companies, Beverage Companies, Farming products such as vegetables, fruits etc., Garden products
                          such as plants, flowers etc., Kitchen brands, to reach a highly engaged audiences of Food buyers such
                          us Local consumers, Grocery Buyers, Students, International travelers and Household Cooks.
                        </p>
                        <p>
                          Letme-save.com was established with the goal of saving food wastes and advertising last minute “save
                          food” advertisements. While continuing to fight against food wastes by advertising the surplus foods in our
                          platform, we manage to advertise thousands of quality food offers and providing food businesses a
                          solution for campaigns reaching abundant customers and sell through our platform.
                        </p>
                        <p>
                          Letme-save.com accepts every type of businesses dealing with food as our “Food partner” where they
                          can create their profile for free, and post food offers for free to reach highly engaged consumers, online at
                          scale. We also work with many social media channels to reach our food focused audience.
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >How to join as a marketing ambassador in Letme-save.com?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>
                          Join as a Marketing ambassador in Letme-save.com for free – by register as a Marketing ambassador in
                          our website. In the registration form, you may need to mention / share your goals and why do you want to
                          join as our Marketing ambassador. We will go through your profile and approve it. Since we receive so
                          many applications, we filter and consider only serious individuals who have a positive vision like us. We
                          may have a telephone interview when needed.
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">What is your task?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>
                          1)
                          Find “Food partners” – in person or through online, social media etc.
                          <br />Ask “Food partners” to register/join as a food partner in Letme-save.com website or download PARTNER
                          APP and start to post their offers. It is free to join as a food partner, post their ads and getting new
                          customers.
                        </p>
                        <p>
                          Who are “Food partners”?
                          <br />In your area (near your home or school), For example,
                          <br />Grocery store chains
                          <br />Restaurant chains
                          <br />Individual grocery stores
                          <br />Individual Restaurants
                          <br />School/College/University canteens
                          <br />Industries with food service
                          <br />Farmers
                          <br />Gardeners
                          <br />Hotels with food services
                          <br />Buffet restaurants
                          <br />Bakeries
                          <br />Kiosks
                          <br />Beverage companies (wholesale price for end consumers)
                          <br />Food companies (wholesale price for end consumers)
                        </p>
                        <p>
                          2)
                          Find “Food consumers” – in person or through online, social media etc.
                          <br />Encourage “Food consumers” to download USER APP and browse/buy food offers through the platform
                        </p>
                        <p>
                          Who are targeted “Food consumers”? For example,
                          <br />Students
                          <br />Travelers
                          <br />10
                          <br />Local people
                          <br />Household grocery buyers (90%)
                          <br />Female aged 21-54 (80%)
                          <br />Young families with 1-2 children
                          <br />Young couple
                          <br />Primary household cook
                          <br />Vegetarian
                          <br />Group celebrations (birthday, festivals, parties etc)
                          <br />Industrial area fulltime employees (90%)
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">What is marketing ambassador’s target?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>
                          <b>First 3 months:</b>
                          <br />First 3 months, your task will be only reaching out to as many as possible “Food partners”, and make
                          them to join in letme-save.com, and download the PARTNER APP. Every day if you target minimum 5
                          food partners, then you can reach minimum 100 food partners (5 partners per day x about 20 working
                          days) in one month.
                          <br />You can ask the food partners to post ad from 4th month.
                        </p>
                        <p>
                          <b>From 4th month:</b>
                          <br />Within 3 months, if you reach 300 food partners in one area then you can start online (social media)
                          advertisement, and/or through your network to reach more customers, and let them download the USER
                          APP.
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">How Letme-save.com works?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>
                          * When food consumers buy online particular offer, they pay only 18% through online. Rest of the
                          money will be paid directly to the food partners the food consumers pick-up or dine-in.
                        </p>
                        <p>
                          * So, the food-consumer does not need to worry about paying more. Food partners are secured to
                          get the business.
                        </p>
                        <p>
                          * Anyone can refer “terms and conditions” in our web for the cancellation policies for food
                          consumers and food partners.
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">What you will get in return?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>
                          You will get monthly minimum compensation for the first three months. From 4th month, you will get 5%
                          commission of each purchase done with the “Food partners” you introduced. For example, if we consider
                          a minimal case scenario in the beginning, let us assume each restaurant sells 10 USD / day through the
                          platform then their monthly sales will be 300 USD / restaurant. If there are 300 restaurants, then 300x300
                          USD=90,000 USD. Then you can calculate 5% commission as 4500 USD. Of course, this can vary from
                          place to place, how attractive food offers posted by restaurants, how many users buy and so on.
                        </p>
                        <p>
                          But if you introduce more restaurants, and more users for the first 1-2 years then there will be a huge
                          passive income for you. Of course, the sales can vary. More Food partners and More consumers – You
                          will earn more commission.
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >As a marketing ambassador, what are your benefits and how your pay is secured?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>
                          * You will be our “Marketing ambassador”. You can create your profile, input your bank account
                          number in our platform as a marketing partner/ambassador.
                        </p>
                        <p>* You will be offered “Marketing partner ID” after successful registration and profile approval.</p>
                        <p>
                          * When you introduce food partners, they must add your “Marketing partner ID” in their profile.
                          So whatever sales they do then your commission will be automatically added to your profile. You can
                          login and check how much you earned per day or per week or per month.
                        </p>
                        <p>* So, this will encourage you to push – finding more partners and more consumers.</p>
                        <p>
                          * End of every month, your commission will be paid-out. It should be minimum 100 USD or
                          more. Otherwise, it will be accumulated in the next month.
                        </p>
                        <p>* This is purely a result-oriented income. So, more sales will bring more commissions to you</p>
                        <p>
                          * Regarding the compensation for the first 3 months, you will be paid 100 USD per month. In
                          return, you should be ready to invest your time with a 1000% positive attitude and confident on what you
                          do.
                        </p>
                        <p>
                          * This compensation will be paid together with your first month commission. This can be the end
                          of 4th month. The reason we hold this compensation is that marketing partners may create fake profiles
                          for “Food partners” and “Users”. It should not be like that. We will cross check and verify the Food partner
                          profiles, their address, business website before we approve them. You are getting compensation and
                          commision only for active food partners and consumers you introduce.
                        </p>
                        <p>
                          * You must believe in yourself and take things positively. Then you will be a money magnet, but
                          you need to invest your time and brain in the first 3-5 months.
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">What support you will receive from us?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>
                          We will collaborate consistently on three levels meetings on Operational, Tactical and Strategic. You will
                          earn a great marketing ideas and work experiences. We will send you soft-copies of fliers, some
                          marketing materials, promotion details, and regular posts that you can share with your network.
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">Join today and earn with us</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>
                          Initial dedicated work for a short period will give you long term passive income. Of course, it needs
                          consistent involvement in social media and digital marketing and certainly the growth potential is
                          exponential.
                        </p>
                        <p>
                          Our selected ambassadors will be invited to our headquarter in Norway for annual green awareness
                          conferences to present themselves, to share their contributions and ideas to the rest of the world about
                          green awareness, and how you are helping the world by helping yourself.
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-container>
                <v-row justify="center">
                  <v-expansion-panels hover v-model="panel" focusable>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">Who can be hosts?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Any food, accommodation business places, farms who is looking for volunteers help and in return be able to provide friendly environment, accommodation and food can be hosts at Letme-save.com.</p>
                        <p>As an option for hosts and volunteers: Host may offer a minimum wage for volunteering, and may offer a job to volunteer after volunteering period. This is not compulsory but optional. Conditions and agreements may vary depending on the skills volunteers can offer and the requirements of each host. It is important that the volunteer communicate as much as possible beforehand with your hosts so that you both know each other's expectations.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">How to become a host at Letme-save.com?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>
                          <nuxt-link
                            to="/how-it-works/information-for-hosts"
                          >Click information for hosts…</nuxt-link>
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >Will it cost to become a host member at Letme-save.com?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>It is completely free to become a host for food partners. Others who wants to be a host may need to pay very minimum annual fee.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >Does hosts need to pay minimum wage to volunteers for their help?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Letme-save.com introduce this concept primarily for cultural exchange or learning new skills from each other and a way of making new friends. It is a free willing help, and payment is optional.</p>
                        <p>But when volunteers help with host’s business activity, it is the responsibility of hosts who must make sure that they are meeting their local government rules.</p>
                        <p>It is important that the host communicate as much as possible beforehand with your volunteer so that you both know each other's expectations.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >What is the role of Letme-save.com in Hosts-Volunteers concept?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>This concept is mainly for cultural exchange. Letme-save.com only connects hosts and volunteers, and they can contact each other.</p>
                        <p>Aside from that Hosts and Volunteers take their own responsibility, further communication, arranging the dates for volunteering period, traveling and staying safe etc. in which Letme-save.com does not take any responsibility.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-container>
                <v-row justify="center">
                  <v-expansion-panels hover v-model="panel" focusable>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">Who can be volunteers?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Any traveler who is willing to help a host 5 hours a day for free and in return for a food to eat and a place to stay for free. This will give volunteers a plenty of time to explore the new city, a new work experience, future job reference, meet new people and learn new culture.</p>
                        <p>As an option for hosts and volunteers: Host may offer a minimum wage for volunteering, and may offer a job to volunteer after volunteering period. This is not compulsory but optional. Conditions and agreements may vary depending on the skills volunteers can offer and the requirements of each host. It is important that the volunteer communicate as much as possible beforehand with your hosts so that you both know each other's expectations.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">How to become a volunteer at Letme-save.com?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>
                          <nuxt-link
                            to="/how-it-works/information-for-volunteers"
                          >Click information for volunteers…</nuxt-link>
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">What is the minimum age to join as a volunteer?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Volunteers must be 18 years old to create their profile in Letme-save.com. The minimum age for volunteering in most countries is 18. Minors accompanied with their parents are also accepted on some hosts projects.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">Can volunteer travel in a group?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Yes, but each member of the group must have their own volunteer profile unless they are couple. You have to communicate and share the correct profile details so that hosts know who you are travelling with, and agree or disagree.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >Will it cost to become a volunteer member at Letme-save.com?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Yes. Volunteers may need to pay a very minimum annual fee which is 25 USD per year. You can contact all the hosts all around the world.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >Can volunteer use Letme-save.com to find paid work?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Letme-save.com introduce this concept primarily for cultural exchange or learning new skills and a way of making new friends. It is a free willing help, and payment is optional.</p>
                        <p>But when volunteers help with host’s business activity, host may offer minimum payment to ensure that they are meeting their local government rules.</p>
                        <p>It is important that the volunteer communicate as much as possible beforehand with your hosts so that you both know each other's expectations.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >What is the role of Letme-save.com in Hosts-Volunteers concept?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>This concept is mainly for cultural exchange. Letme-save.com only connects hosts and volunteers, and they can contact each other.</p>
                        <p>Aside from that Hosts and Volunteers take their own responsibility, further communication, arranging the dates for volunteering period, traveling, and staying safe etc. in which Letme-save.com does not take any responsibility.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">How do I know volunteering is safe?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>
                          <nuxt-link
                            to="/how-it-works/safty"
                          >Please click to read our notes on safety</nuxt-link>
                        </p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-container>
                <v-row justify="center">
                  <v-expansion-panels hover v-model="panel" focusable>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">What is global green awareness program?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Letme-save.com launched global “green awareness program” to promote “ZERO WASTE OF THE FOOD” all around the world. In this program, any individual person (student or parent or group of friends or family or retired personnel or whatever your current role in the society) can help us and become our “Global green awareness ambassador” or “Global green awareness warrior” in your area.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span class="accord-align">Who creates food wastes?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Regular food wastes come from food businesses like school/college/university canteens, company’s canteens, nearby hotels with food services, buffets, restaurants, super markets, caterers, kiosks etc.</p>
                        <p>Non-regular food wastes come from parties, celebrations, event organizers, buffets, farmers etc. These wastes are not coming everyday but they seldom do food wastes in big quantities.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >Who can be Letme-save.com’s global green awareness ambassadors and warriors?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Regardless of your age and role in the society (student or parent or staff or retired or any individual or group), you can spread Letme-save.com’s global green awareness program to encourage public awareness towards “ZERO WASTE OF THE FOOD”.</p>
                        <p>If they change their way of throwing food and use Letme-save.com to distribute to the needed users that is the goal. Just submit your summary of contributions and achievements under “contact us” in Letme-save.com. You will be recognized with certificate, and badge in some cases.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >Will there be annual meet for green awareness ambassadors, warriors and marketing partners?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Yes. Selected candidates will be invited to the head office in Norway from all around the world to meet same minded people, to share your experience and to set new goals for the upcoming year.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <span
                          class="accord-align"
                        >Can I get resources or materials to promote Letme-save.com’s “Green awareness program” to achieve zero waste of the food?</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <p>Yes. “contact us” and request for resources like fliers, posters etc. We will send you electronically and hard copies in some cases.</p>
                        <p>But we strongly recommend you to use your social media as the tool such as facebook, twitter, Instagram, linkedin, youtube channels, whats app etc. Just one click. It will not change people mind instantly but if you do not give up and try to convince the importance of green awareness and carbon emissions due to food waste, they will eventually change their mind. That’s how you become green awareness ambassador and green awareness warrior.</p>
                        <p>We also recommend to “spread by word of mouth” with your network, people who you know, to your family members, friends etc.</p>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import InnerBanner from "~/components/InnerBanner";
export default {
  components: {
    InnerBanner,
  },
  data: () => ({
    panel: "",
    tab: 2,
    items: [
      {
        text: "Home",
        disabled: false,
        href: "/",
      },
      {
        text: "How it works",
        disabled: true,
        href: "#",
      },
      {
        text: "FAQ",
        disabled: true,
        href: "#",
      },
    ],
  }),
};
</script>

<style scoped>
.banner-search {
  background-image: url("../../assets/listing-banner.jpg");
  background-position: center 15%;
}
.mission-content .theme--light.v-expansion-panels .v-expansion-panel {
  background-color: #cccccc;
  border-radius: 0;
}
.accord-align .v-icon.v-icon {
  font-size: 18px;
  margin-right: 10px;
}
button.v-expansion-panel-header:hover,
button.v-expansion-panel-header.v-expansion-panel-header--active {
  background: #65bcde;
  color: #fff;
}
button.v-expansion-panel-header.v-expansion-panel-header--active {
  background: #65bcde;
  color: #fff;
  margin-bottom: 30px;
}
ul.v-breadcrumbs.theme--light {
  padding: 10px 0 10px;
}
</style>
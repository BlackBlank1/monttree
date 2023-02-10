<template>
    <div>
        <div class="contact-outside">
            <div class="contact-title">
                <div>
                    <br>
                    <h1>THANKS FOR VISITING US</h1>
                </div>
                <div>
                    <hr>
                </div>
            </div>
        </div>
        <div class="contact">
            <div class="contact-content">
                <div>
                    <h1>MONTTREE PRECISION OPTICAL CO., LTD</h1>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>
                        <span class="icon icon-home"></span> NO.111 Meifeng Rd., Fuzhou,Fujian, China 350003<br />
                        <span class="fa fa-envelope"></span> info<img src="/src/images/at.png" style="width: 18px;">monttree.com
                        <br />
                        <span class="icon icon-phone"></span> 86 591 83752442 <br />
                        <i class="fa fa-fax"></i> 86 591 87899101 <br />
                    </p>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-content">
                <div>
                    <h4 style="color: white; font-size: 18px">Copyright ©Monttree Precision Optical All Rights Reserved</h4>

                </div>
                <div style="margin-top: -30px">
                    <p>
                        <a href="https://beian.miit.gov.cn/">闽ICP备17023185号</a><br>
                        <a href="https://beian.miit.gov.cn/" style="margin-left: 28px">工信部备案</a>
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "",
    }
</script>

<style>
    .contact-outside{
        display: flex;
        height: 300px;
        background-image: url("src/images/bg/divider1_3.jpg");
    }
    .contact-title{
        font-size: 20px;
        align-items: center;
        color: white;
        display: flex;
        margin-left: 40px;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
    }

    hr{
        display: flex;
        width: 600px;
        margin-top: -10px;
    }

    .contact{
        height: 278px;
        display: flex;
        margin-left: 180px;
    }

    .contact-content{
        display: flex;
        flex-direction: column;
    }

    .footer{
        background: #2b2b2b;
    }

    .footer-content{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    a{
        color: #3498db;
        font-size: 13px;
        text-decoration: none;
    }
</style>
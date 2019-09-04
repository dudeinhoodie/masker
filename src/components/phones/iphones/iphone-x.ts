// TODO: переделать структуру и описать типы
// TODO: оперировать типами
// TODO: разобраться с размерами бэкграунда + наложением

const phone = (bcg?: string) => `
    <svg width="360" height="721" viewBox="0 0 360 721" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path
                d="M358.295 167.079C359.239 167.079 360 167.838 360 168.782V247.943C360 248.887 359.239 249.648 358.295 249.648H345.164C344.22 249.648 343.459 248.887 343.459 247.943V168.782C343.459 167.838 344.22 167.079 345.164 167.079H358.295Z"
                fill="black"
            />
            <g filter="url(#filter0_f)">
                <path
                    d="M357.932 168.599C358.774 168.599 359.452 169.277 359.452 170.119V246.607C359.452 247.449 358.774 248.127 357.932 248.127H357.46V168.599H357.932Z"
                    fill="url(#paint0_linear)"
                />
            </g>
            <path
                d="M14.8366 97.7257H1.70465C0.763207 97.7257 1.71661e-05 98.4889 1.71661e-05 99.4303V124.053C1.71661e-05 124.994 0.763207 125.757 1.70465 125.757H14.8366C15.7781 125.757 16.5413 124.994 16.5413 124.053V99.4303C16.5413 98.4889 15.7781 97.7257 14.8366 97.7257Z"
                fill="black"
            />
            <g filter="url(#filter1_f)">
                <path
                    d="M2.06752 99.2465C1.22562 99.2465 0.547989 99.9241 0.547989 100.766V122.717C0.547989 123.559 1.22562 124.237 2.06752 124.237H2.54017V99.2465H2.06752Z"
                    fill="url(#paint1_linear)"
                />
            </g>
            <path
                d="M1.7051 150.002C0.760729 150.002 1.71661e-05 150.761 1.71661e-05 151.705V200.509C1.71661e-05 201.453 0.760729 202.214 1.7051 202.214H14.836C15.7803 202.214 16.541 201.453 16.541 200.509V151.705C16.541 150.761 15.7803 150.002 14.836 150.002H1.7051Z"
                fill="black"
            />
            <g filter="url(#filter2_f)">
                <path
                    d="M2.06752 151.522C1.22562 151.522 0.547988 152.199 0.547988 153.041V199.173C0.547988 200.015 1.22562 200.693 2.06752 200.693H2.54017V151.522H2.06752Z"
                    fill="url(#paint2_linear)"
                />
            </g>
            <path
                d="M1.7051 215.662C0.760729 215.662 1.71661e-05 216.421 1.71661e-05 217.365V266.169C1.71661e-05 267.113 0.760729 267.874 1.7051 267.874H14.836C15.7803 267.874 16.541 267.113 16.541 266.169V217.365C16.541 216.421 15.7803 215.662 14.836 215.662H1.7051Z"
                fill="black"
            />
            <g filter="url(#filter3_f)">
                <path
                    d="M2.06752 217.182C1.22562 217.182 0.547988 217.859 0.547988 218.701V264.833C0.547988 265.675 1.22562 266.353 2.06752 266.353H2.54017V217.182H2.06752Z"
                    fill="url(#paint3_linear)"
                />
            </g>
            <path
                d="M54.7402 0.751953C25.4999 0.751953 1.96096 24.2909 1.96096 53.5312V668.209C1.96096 697.449 25.4999 720.99 54.7402 720.99H161.703L163.889 717.892H171.646H188.354H196.109L198.297 720.99H305.26C334.5 720.99 358.039 697.449 358.039 668.209V53.5312C358.039 24.2909 334.5 0.751953 305.26 0.751953H54.7402Z"
                fill="black"
            />
            <path d="M3.16211 74.9336H7.32809V70.0098H3.16211V74.9336Z" fill="#7D7E7F" />
            <path d="M3.16211 647.058H7.32809V74.9336H3.16211V647.058Z" fill="#EBEBEB" />
            <path d="M3.16211 651.984H7.32809V647.059H3.16211V651.984Z" fill="#7D7E7F" />
            <path
                d="M356.838 651.984H352.672V668.461C352.672 695.043 331.272 716.443 304.689 716.443H55.3105C28.7284 716.443 7.32809 695.043 7.32809 668.461V651.984H3.16211V666.281C3.16211 695.96 27.0558 719.854 56.7343 719.854H303.266C332.944 719.854 356.838 695.96 356.838 666.281V651.984Z"
                fill="#EBEBEB"
            />
            <path d="M356.838 647.059H352.672V651.984H356.838V647.059Z" fill="#7D7E7F" />
            <path d="M356.838 74.9336H352.672V647.058H356.838V74.9336Z" fill="#EBEBEB" />
            <path d="M356.838 70.0098H352.672V74.9336H356.838V70.0098Z" fill="#7D7E7F" />
            <path
                d="M56.7343 2.26562C27.0558 2.26562 3.16211 26.1593 3.16211 55.8379V70.0098H7.32809V54.2246C7.32809 27.6424 28.7284 6.24414 55.3105 6.24414H304.689C331.272 6.24414 352.672 27.6424 352.672 54.2246V70.0098H356.838V55.8379C356.838 26.1593 332.944 2.26562 303.266 2.26562H56.7343Z"
                fill="#EBEBEB"
            />
            <path
                d="M325.152 15.3633C323.978 15.247 324.532 16.418 327.168 18.8594C335.864 26.9145 341.263 38.5735 341.263 51.5508V361.123V670.695C341.263 683.673 335.864 695.332 327.168 703.387C324.532 705.828 323.978 706.999 325.152 706.883C325.857 706.813 327.184 706.28 329.056 705.281C341.766 698.501 349.146 683.873 349.146 668.336V361.123V53.9102C349.146 38.3734 341.766 23.7452 329.056 16.9649C327.184 15.9661 325.857 15.4331 325.152 15.3633Z"
                fill="url(#paint4_linear)"
            />
            <path
                d="M34.8479 15.3633C36.0225 15.247 35.468 16.418 32.8323 18.8594C24.1361 26.9145 18.7366 38.5735 18.7366 51.5508V361.123V670.695C18.7366 683.673 24.1361 695.332 32.8323 703.387C35.468 705.828 36.0225 706.999 34.8479 706.883C34.1432 706.813 32.8157 706.28 30.9436 705.281C18.2341 698.501 10.8538 683.873 10.8538 668.336V361.123V53.9102C10.8538 38.3734 18.2341 23.7452 30.9436 16.9649C32.8157 15.9661 34.1432 15.4331 34.8479 15.3633Z"
                fill="url(#paint5_linear)"
            />
            <path
                d="M199.062 27.4464H161.563C160.059 27.4464 158.839 28.6656 158.839 30.1696C158.839 31.6736 160.059 32.8928 161.563 32.8928H199.062C200.566 32.8928 201.786 31.6736 201.786 30.1696C201.786 28.6656 200.566 27.4464 199.062 27.4464Z"
                fill="#1E1E1E"
            />
            <path
                d="M218.891 34.9018C221.698 34.9018 223.973 32.6263 223.973 29.8195C223.973 27.0126 221.698 24.7371 218.891 24.7371C216.084 24.7371 213.809 27.0126 213.809 29.8195C213.809 32.6263 216.084 34.9018 218.891 34.9018Z"
                fill="#2B2B2B"
            />
            <path
                d="M218.891 33.8916C221.14 33.8916 222.963 32.0684 222.963 29.8194C222.963 27.5704 221.14 25.7473 218.891 25.7473C216.642 25.7473 214.819 27.5704 214.819 29.8194C214.819 32.0684 216.642 33.8916 218.891 33.8916Z"
                fill="#0A0D13"
            />
            <path
                d="M218.891 32.9221C220.604 32.9221 221.994 31.533 221.994 29.8194C221.994 28.1059 220.604 26.7167 218.891 26.7167C217.177 26.7167 215.788 28.1059 215.788 29.8194C215.788 31.533 217.177 32.9221 218.891 32.9221Z"
                fill="#091427"
            />
            <g filter="url(#filter4_f)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M216.755 27.7437C216.387 27.7824 215.864 28.3439 215.826 29.4477C215.787 30.5515 216.271 31.1518 216.542 31.1518C216.813 31.1518 217.936 29.5445 216.755 27.7437Z"
                    fill="#235A91"
                    fill-opacity="0.556075"
                />
            </g>
            <g filter="url(#filter5_f)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M219.397 27.3571C218.817 27.5357 218.705 28.4732 218.728 29.0089C218.75 29.5446 219.509 30.9509 220.424 30.6384C221.339 30.3259 221.496 29.1651 221.116 28.3839C220.737 27.6026 220.045 27.0446 219.397 27.3571Z"
                    fill="#235A91"
                    fill-opacity="0.556075"
                />
            </g>
            <path
                d="M152.091 30.2879C152.091 31.345 151.672 32.3591 150.926 33.108C150.18 33.8568 149.168 34.2795 148.111 34.2834C147.053 34.2873 146.038 33.8721 145.286 33.1287C144.535 32.3853 144.108 31.3744 144.1 30.3173C144.093 29.2602 144.504 28.2431 145.245 27.4887C145.985 26.7344 146.995 26.3043 148.052 26.2926C149.109 26.2809 150.127 26.6887 150.884 27.4265C151.642 28.1643 152.075 29.1721 152.091 30.2291L148.096 30.2879H152.091Z"
                fill="#0F0F0F"
            />
            <path
                d="M129.433 30.3817C129.433 31.951 128.801 33.4563 127.676 34.568C126.55 35.6796 125.023 36.3071 123.428 36.3129C121.834 36.3186 120.302 35.7023 119.168 34.5988C118.035 33.4953 117.391 31.9946 117.38 30.4253C117.368 28.8561 117.989 27.3463 119.106 26.2265C120.223 25.1067 121.745 24.4682 123.34 24.4509C124.934 24.4335 126.471 25.0388 127.613 26.134C128.755 27.2293 129.409 28.7253 129.432 30.2944L123.406 30.3817H129.433Z"
                fill="#101010"
            />
            <path
                d="M55.2721 9.74084C46.5846 9.74084 38.503 12.2255 31.6803 16.5143V22.2018C38.1825 17.9367 45.9671 15.4537 54.358 15.4537H154.182H206.323H306.147C314.538 15.4537 322.323 17.9367 328.825 22.2018V16.5143C322.002 12.2255 313.921 9.74084 305.233 9.74084H206.323H154.182H55.2721Z"
                fill="url(#paint6_linear)"
            />
            <path
                d="M55.2721 712.001C46.5846 712.001 38.503 709.517 31.6803 705.228V699.54C38.1825 703.805 45.9671 706.288 54.358 706.288H154.182H206.323H306.147C314.538 706.288 322.323 703.805 328.825 699.54V705.228C322.002 709.517 313.921 712.001 305.233 712.001H206.323H154.182H55.2721Z"
                fill="url(#paint7_linear)"
            />
            
            
            <path
                d="M55.7793 22.2012C38.0112 22.2012 23.707 36.5054 23.707 54.2734V667.469C23.707 685.237 38.0112 699.541 55.7793 699.541H304.221C321.989 699.541 336.293 685.237 336.293 667.469V54.2734C336.293 36.5054 321.989 22.2012 304.221 22.2012H272.848C271.427 22.2013 270.064 22.7658 269.06 23.7704C268.055 24.7751 267.49 26.1378 267.49 27.5586V30.0254C267.49 39.6789 259.72 47.4512 250.066 47.4512H109.934C100.28 47.4512 92.5098 39.6789 92.5098 30.0254V27.5586C92.5097 26.1378 91.9452 24.7751 90.9405 23.7705C89.9358 22.7658 88.5732 22.2013 87.1524 22.2012H55.7793Z"
                fill="url(#pattern0)"
            />                     
            
            <path
                d="M250.953 29.7425C250.953 31.852 250.107 33.8755 248.602 35.3699C247.097 36.8642 245.054 37.7077 242.921 37.7154C240.788 37.7232 238.739 36.8947 237.222 35.4113C235.706 33.9279 234.846 31.9106 234.83 29.8012C234.814 27.6917 235.644 25.6621 237.139 24.1568C238.633 22.6515 240.669 21.7932 242.802 21.77C244.935 21.7467 246.99 22.5603 248.518 24.0326C250.045 25.5049 250.92 27.5159 250.952 29.6251L242.891 29.7425H250.953Z"
                fill="#0F0F0F"
            />
        </g>
        <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use
                    xlink:href="#image0"
                    transform="translate(-0.103795) scale(0.00214112 0.000997009)"
                />
            </pattern>
            
            <filter
                id="filter0_f"
                x="356.92"
                y="168.059"
                width="3.0713"
                height="80.6073"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="0.269824" result="effect1_foregroundBlur" />
            </filter>
            <filter
                id="filter1_f"
                x="0.0083409"
                y="98.7069"
                width="3.07148"
                height="26.0698"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="0.269824" result="effect1_foregroundBlur" />
            </filter>
            <filter
                id="filter2_f"
                x="0.00833994"
                y="150.982"
                width="3.07148"
                height="50.2503"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="0.269824" result="effect1_foregroundBlur" />
            </filter>
            <filter
                id="filter3_f"
                x="0.00833994"
                y="216.642"
                width="3.07148"
                height="50.2503"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="0.269824" result="effect1_foregroundBlur" />
            </filter>
            <filter
                id="filter4_f"
                x="215.59"
                y="27.5095"
                width="1.92954"
                height="3.87652"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="0.117104" result="effect1_foregroundBlur" />
            </filter>
            <filter
                id="filter5_f"
                x="218.491"
                y="27.0346"
                width="3.052"
                height="3.88282"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="0.117104" result="effect1_foregroundBlur" />
            </filter>
            <linearGradient
                id="paint0_linear"
                x1="357.46"
                y1="168.599"
                x2="357.46"
                y2="248.127"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#CBCBCB" stop-opacity="0.27451" />
                <stop offset="0.04" stop-color="#CBCBCB" />
                <stop offset="0.96" stop-color="#CBCBCB" />
                <stop offset="1" stop-color="#CBCBCB" stop-opacity="0.275701" />
            </linearGradient>
            <linearGradient
                id="paint1_linear"
                x1="2.54017"
                y1="99.2465"
                x2="2.54017"
                y2="124.237"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#CBCBCB" stop-opacity="0.27451" />
                <stop offset="0.05" stop-color="#CBCBCB" />
                <stop offset="0.95" stop-color="#CBCBCB" />
                <stop offset="1" stop-color="#CBCBCB" stop-opacity="0.275701" />
            </linearGradient>
            <linearGradient
                id="paint2_linear"
                x1="2.54017"
                y1="151.522"
                x2="2.54017"
                y2="200.693"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#CBCBCB" stop-opacity="0.27451" />
                <stop offset="0.05" stop-color="#CBCBCB" />
                <stop offset="0.95" stop-color="#CBCBCB" />
                <stop offset="1" stop-color="#CBCBCB" stop-opacity="0.275701" />
            </linearGradient>
            <linearGradient
                id="paint3_linear"
                x1="2.54017"
                y1="217.182"
                x2="2.54017"
                y2="266.353"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#CBCBCB" stop-opacity="0.27451" />
                <stop offset="0.05" stop-color="#CBCBCB" />
                <stop offset="0.95" stop-color="#CBCBCB" />
                <stop offset="1" stop-color="#CBCBCB" stop-opacity="0.275701" />
            </linearGradient>
            <linearGradient
                id="paint4_linear"
                x1="340.224"
                y1="361.123"
                x2="349.146"
                y2="361.123"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#404040" />
                <stop offset="0.6" stop-color="#838383" />
                <stop offset="1" stop-color="#A7A7A7" />
            </linearGradient>
            <linearGradient
                id="paint5_linear"
                x1="19.7758"
                y1="361.123"
                x2="10.8538"
                y2="361.123"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#404040" />
                <stop offset="0.6" stop-color="#838383" />
                <stop offset="1" stop-color="#A7A7A7" />
            </linearGradient>
            <linearGradient
                id="paint6_linear"
                x1="31.6803"
                y1="22.2018"
                x2="328.825"
                y2="22.2018"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#4F4F4F" stop-opacity="0.130841" />
                <stop offset="0.07" stop-color="#4F4F4F" />
                <stop offset="0.937" stop-color="#4F4F4F" stop-opacity="0.953271" />
                <stop offset="1" stop-color="#4F4F4F" stop-opacity="0" />
            </linearGradient>
            <linearGradient
                id="paint7_linear"
                x1="31.6803"
                y1="699.54"
                x2="328.825"
                y2="699.54"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#4F4F4F" stop-opacity="0.130841" />
                <stop offset="0.07" stop-color="#4F4F4F" />
                <stop offset="0.937" stop-color="#4F4F4F" stop-opacity="0.953271" />
                <stop offset="1" stop-color="#4F4F4F" stop-opacity="0" />
            </linearGradient>
            <linearGradient
                id="paint8_linear"
                x1="304.221"
                y1="22.2012"
                x2="303.21"
                y2="920.095"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#404040" />
                <stop offset="0.0219315" stop-color="#464646" />
                <stop offset="0.99949" stop-color="#525252" stop-opacity="0.0156863" />
                <stop offset="1" stop-color="#444444" stop-opacity="0" />
            </linearGradient>
            <image
                id="image0"
                width="564"
                height="1003"
                xlink:href="${bcg}"
            />
        </defs>
    </svg>
`;

export default phone;

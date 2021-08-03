import styles from './Loading.module.css';

const Loading = () => {
  return (
    <>
      <div className={styles.loading}>
        <svg>
          <g className={styles.inner}>
            <circle r="5%" cx="35%" cy="20%" />
            <circle r="7%" cx="30%" cy="45%" />
            <circle r="5%" cx="45%" cy="35%" />
          </g>
          <path
            className={styles.outer}
            d="m 45.219872,1.2324257 c -0.850257,0.029203 -1.638343,0.5571773 -1.961855,1.4044918 l -0.115908,0.3043821 c -0.431349,1.1297527 0.130612,2.3867037 1.260365,2.8180545 0,0 0.242675,0.4783812 0.251972,0.6193472 0.09093,1.379021 -1.091136,3.5189512 -1.61363,4.3938877 C 40.257077,9.7456127 37.313407,9.2199389 34.346273,9.2199373 31.914758,9.2199937 29.496132,9.5730778 27.166078,10.268141 26.5967,9.2137089 25.921488,7.7041797 26.062946,6.6452876 26.10364,6.3406713 26.617788,5.9090254 26.617788,5.9090254 27.746725,5.475545 28.306087,4.2173882 27.872607,3.0884513 L 27.756197,2.7845731 C 27.322717,1.655636 26.065065,1.0952642 24.936127,1.5287448 L 19.095921,3.7712953 C 17.966985,4.2047759 17.407619,5.4629317 17.8411,6.5918696 l 0.116915,0.3038781 c 0.43348,1.1289363 1.691134,1.6888034 2.82007,1.2553245 0,0 0.50014,0.1940808 0.601206,0.2927913 0.761296,0.7435543 1.266497,2.3576995 1.549627,3.5205525 -2.698654,1.377129 -5.125927,3.231089 -7.164571,5.472327 -1.055784,-0.548861 -2.781333,-1.576002 -3.297305,-2.684005 -0.129734,-0.278596 0.07055,-0.919194 0.07055,-0.919194 0.717879,-0.973169 0.512059,-2.334509 -0.461108,-3.052388 L 11.814435,10.588145 C 10.841266,9.8702674 9.4799228,10.075582 8.7620463,11.04875 l -3.7135631,5.033896 c -0.7178773,0.973168 -0.5120594,2.33451 0.4611089,3.052388 l 0.2620508,0.193011 c 0.9731675,0.717877 2.3345104,0.512563 3.0523884,-0.460605 0,0 0.5258828,-0.105854 0.6641982,-0.0771 1.1570585,0.240565 2.6190245,1.548147 3.4625985,2.386679 -1.682898,2.735397 -2.825648,5.76813 -3.3663452,8.933914 C 8.8076334,29.939713 8.0613456,29.677888 7.5959198,29.270858 7.3645826,29.068547 7.289018,28.401555 7.289018,28.401555 7.5519172,27.221178 6.8129303,26.059569 5.6325542,25.796669 L 5.3145656,25.726117 C 4.134189,25.463215 2.9720745,26.201193 2.7091755,27.381573 l -1.3596407,6.106288 c -0.2628983,1.180376 0.4760867,2.341987 1.6564637,2.604888 l 0.3174847,0.07055 c 1.180376,0.262898 2.342492,-0.475584 2.6053902,-1.65596 0,0 0.4378807,-0.309507 0.576008,-0.339154 0.7397741,-0.158777 1.7785946,0.03452 2.7218011,0.305392 0.018592,3.510845 0.7729221,6.978806 2.2143295,10.180169 -0.760288,0.868922 -2.2735562,2.432059 -3.5376864,2.670399 C 7.6013253,47.381088 7.0299909,47.028332 7.0299909,47.028332 6.2641788,46.092418 4.8938631,45.956122 3.9579486,46.721934 L 3.7059765,46.928047 C 2.770063,47.693859 2.6327585,49.06367 3.3985708,49.999584 l 3.9615034,4.841391 c 0.7658126,0.935914 2.1361271,1.07221 3.0720418,0.306398 l 0.251972,-0.206113 c 0.935914,-0.765812 1.073219,-2.135626 0.307406,-3.07154 0,0 0.02718,-0.535751 0.0892,-0.662686 0.441709,-0.904107 1.690085,-1.829813 2.684006,-2.464789 2.253975,3.221155 5.232535,5.868303 8.696056,7.728483 -0.189352,1.18039 -0.616414,3.104566 -1.492178,3.934795 -0.223031,0.211433 -0.893996,0.224254 -0.893996,0.224254 -1.150669,-0.371976 -2.376535,0.255336 -2.74851,1.406004 l -0.09978,0.309925 c -0.371976,1.150671 0.254326,2.376536 1.404995,2.748512 l 5.952082,1.924058 c 1.150668,0.371973 2.376534,-0.255336 2.74851,-1.406004 l 0.100285,-0.309422 c 0.371976,-1.150668 -0.254831,-2.376536 -1.405499,-2.748509 0,0 -0.267104,-0.465449 -0.283721,-0.605742 -0.123663,-1.043941 0.480602,-2.589466 0.987226,-3.670727 2.462771,0.783515 5.031703,1.182291 7.616106,1.182252 4.649802,-6.1e-5 9.208343,-1.290688 13.168053,-3.728177 0.761885,0.686881 2.523994,2.401305 2.740449,3.794194 0.04719,0.303676 -0.323533,0.863255 -0.323533,0.863255 -0.960074,0.735296 -1.140466,2.099872 -0.40517,3.059949 l 0.19805,0.258523 c 0.735296,0.960074 2.099872,1.141474 3.059947,0.406179 l 4.966368,-3.80377 c 0.960074,-0.735295 1.140468,-2.099872 0.40517,-3.059946 l -0.19805,-0.258525 c -0.735293,-0.960074 -2.099872,-1.141475 -3.059947,-0.406179 0,0 -0.534791,-0.04429 -0.659662,-0.110363 -1.201831,-0.635862 -2.392551,-2.723218 -2.879537,-3.652585 2.167731,-1.99539 3.967531,-4.356572 5.317112,-6.975593 1.145301,0.182004 3.253652,0.628741 4.124279,1.565754 0.209186,0.225137 0.215688,0.896516 0.215688,0.896516 -0.383491,1.146883 0.231405,2.378626 1.378285,2.762117 l 0.308919,0.103309 c 1.146883,0.383491 2.379129,-0.230396 2.76262,-1.377279 l 1.983524,-5.932932 c 0.383489,-1.14688 -0.231405,-2.378626 -1.378288,-2.762117 l -0.308916,-0.103308 c -1.146883,-0.383489 -2.378628,0.230917 -2.762117,1.377781 0,0 -0.46781,0.262463 -0.60826,0.277676 -1.149331,0.124478 -2.893018,-0.633564 -3.962008,-1.170662 0.687844,-2.318952 1.037156,-4.725094 1.037117,-7.14391 1.5e-4,-3.817291 -0.869677,-7.584413 -2.543405,-11.015207 0.211452,-0.251034 2.369822,-2.77544 4.054229,-3.037774 0.30366,-0.0473 0.863255,0.323028 0.863255,0.323028 0.735621,0.959828 2.100623,1.140286 3.060452,0.404667 l 0.258523,-0.19805 c 0.959826,-0.73562 1.140285,-2.100624 0.404667,-3.060451 L 61.759311,12.791388 C 61.02369,11.831563 59.658686,11.651102 58.698859,12.386721 l -0.258522,0.19805 c -0.959827,0.73562 -1.140791,2.100625 -0.405173,3.060451 0,0 -0.04434,0.534768 -0.110363,0.659663 -0.611121,1.156008 -2.597021,2.319679 -3.574979,2.840732 -1.885433,-2.482245 -4.216388,-4.591896 -6.873794,-6.221188 0.0306,-0.209908 0.544256,-3.6281634 1.865601,-4.7562228 0.233714,-0.199542 0.904577,-0.1778922 0.904577,-0.1778922 1.129753,0.4313513 2.386704,-0.1311153 2.818056,-1.2608678 L 53.180169,6.4255681 C 53.611518,5.2958154 53.049557,4.0388646 51.919804,3.6075134 L 46.07607,1.3760497 C 45.79365,1.268212 45.503288,1.2226915 45.219872,1.2324257 Z"
          />
        </svg>
      </div>
      <h1 className={styles.loadingPTag}>Loading ...! Please Wait !</h1>
    </>
  );
};

export default Loading;

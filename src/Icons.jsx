import PropTypes from 'prop-types';

const SearchIcon = ({ size }) => {

  const style = {
    display: 'block',
    color: '#eee',
    stroke: 'currentcolor',
    strokeWidth: '4',
    overflow: 'visible',
    background: 'none',
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
      style={style}><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>
  );
};


const LogoIcon = ({ size }) => {
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 320.1 99.9" enableBackground="new 0 0 320.1 99.9" xmlSpace="preserve">
    <path fill="#FF5A5F" d="M168.7,25.1c0,3.6-2.9,6.5-6.5,6.5s-6.5-2.9-6.5-6.5s2.8-6.5,6.5-6.5C165.9,18.7,168.7,21.6,168.7,25.1z   M141.9,38.2c0,0.6,0,1.6,0,1.6s-3.1-4-9.7-4c-10.9,0-19.4,8.3-19.4,19.8c0,11.4,8.4,19.8,19.4,19.8c6.7,0,9.7-4.1,9.7-4.1v1.7  c0,0.8,0.6,1.4,1.4,1.4h8.1V36.8c0,0-7.4,0-8.1,0C142.5,36.8,141.9,37.5,141.9,38.2z M141.9,62.3c-1.5,2.2-4.5,4.1-8.1,4.1  c-6.4,0-11.3-4-11.3-10.8s4.9-10.8,11.3-10.8c3.5,0,6.7,2,8.1,4.1V62.3z M157.4,36.8h9.6v37.6h-9.6V36.8z M300.8,35.8  c-6.6,0-9.7,4-9.7,4V18.7h-9.6v55.7c0,0,7.4,0,8.1,0c0.8,0,1.4-0.7,1.4-1.4v-1.7l0,0c0,0,3.1,4.1,9.7,4.1c10.9,0,19.4-8.4,19.4-19.8  C320.1,44.2,311.6,35.8,300.8,35.8z M299.2,66.3c-3.7,0-6.6-1.9-8.1-4.1V48.8c1.5-2,4.7-4.1,8.1-4.1c6.4,0,11.3,4,11.3,10.8  S305.6,66.3,299.2,66.3z M276.5,52.1v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7c-2.9,0-5.9,1.5-7.8,3.7v26.2h-9.6V36.8h7.6  c0.8,0,1.4,0.7,1.4,1.4v1.6c2.8-2.9,6.5-4,10.2-4c4.2,0,7.7,1.2,10.5,3.6C275.2,42.2,276.5,45.8,276.5,52.1z M218.8,35.8  c-6.6,0-9.7,4-9.7,4V18.7h-9.6v55.7c0,0,7.4,0,8.1,0c0.8,0,1.4-0.7,1.4-1.4v-1.7l0,0c0,0,3.1,4.1,9.7,4.1c10.9,0,19.4-8.4,19.4-19.8  C238.2,44.2,229.7,35.8,218.8,35.8z M217.2,66.3c-3.7,0-6.6-1.9-8.1-4.1V48.8c1.5-2,4.7-4.1,8.1-4.1c6.4,0,11.3,4,11.3,10.8  S223.6,66.3,217.2,66.3z M191.2,35.8c2.9,0,4.4,0.5,4.4,0.5v8.9c0,0-8-2.7-13,3v26.3h-9.6V36.8c0,0,7.4,0,8.1,0  c0.8,0,1.4,0.7,1.4,1.4v1.6C184.3,37.7,188.2,35.8,191.2,35.8z M91.5,71c-0.5-1.2-1-2.5-1.5-3.6c-0.8-1.8-1.6-3.5-2.3-5.1l-0.1-0.1  c-6.9-15-14.3-30.2-22.1-45.2l-0.3-0.6c-0.8-1.5-1.6-3.1-2.4-4.7c-1-1.8-2-3.7-3.6-5.5C56,2.2,51.4,0,46.5,0c-5,0-9.5,2.2-12.8,6  c-1.5,1.8-2.6,3.7-3.6,5.5c-0.8,1.6-1.6,3.2-2.4,4.7l-0.3,0.6C19.7,31.8,12.2,47,5.3,62l-0.1,0.2c-0.7,1.6-1.5,3.3-2.3,5.1  c-0.5,1.1-1,2.3-1.5,3.6c-1.3,3.7-1.7,7.2-1.2,10.8c1.1,7.5,6.1,13.8,13,16.6c2.6,1.1,5.3,1.6,8.1,1.6c0.8,0,1.8-0.1,2.6-0.2  c3.3-0.4,6.7-1.5,10-3.4c4.1-2.3,8-5.6,12.4-10.4c4.4,4.8,8.4,8.1,12.4,10.4c3.3,1.9,6.7,3,10,3.4c0.8,0.1,1.8,0.2,2.6,0.2  c2.8,0,5.6-0.5,8.1-1.6c7-2.8,11.9-9.2,13-16.6C93.2,78.2,92.8,74.7,91.5,71z M46.4,76.2c-5.4-6.8-8.9-13.2-10.1-18.6  c-0.5-2.3-0.6-4.3-0.3-6.1c0.2-1.6,0.8-3,1.6-4.2c1.9-2.7,5.1-4.4,8.8-4.4c3.7,0,7,1.6,8.8,4.4c0.8,1.2,1.4,2.6,1.6,4.2  c0.3,1.8,0.2,3.9-0.3,6.1C55.3,62.9,51.8,69.3,46.4,76.2z M86.3,80.9c-0.7,5.2-4.2,9.7-9.1,11.7c-2.4,1-5,1.3-7.6,1  c-2.5-0.3-5-1.1-7.6-2.6c-3.6-2-7.2-5.1-11.4-9.7c6.6-8.1,10.6-15.5,12.1-22.1c0.7-3.1,0.8-5.9,0.5-8.5c-0.4-2.5-1.3-4.8-2.7-6.8  c-3.1-4.5-8.3-7.1-14.1-7.1s-11,2.7-14.1,7.1c-1.4,2-2.3,4.3-2.7,6.8c-0.4,2.6-0.3,5.5,0.5,8.5c1.5,6.6,5.6,14.1,12.1,22.2  c-4.1,4.6-7.8,7.7-11.4,9.7c-2.6,1.5-5.1,2.3-7.6,2.6c-2.7,0.3-5.3-0.1-7.6-1c-4.9-2-8.4-6.5-9.1-11.7c-0.3-2.5-0.1-5,0.9-7.8  c0.3-1,0.8-2,1.3-3.2c0.7-1.6,1.5-3.3,2.3-5l0.1-0.2c6.9-14.9,14.3-30.1,22-44.9l0.3-0.6c0.8-1.5,1.6-3.1,2.4-4.6  c0.8-1.6,1.7-3.1,2.8-4.4c2.1-2.4,4.9-3.7,8-3.7c3.1,0,5.9,1.3,8,3.7c1.1,1.3,2,2.8,2.8,4.4c0.8,1.5,1.6,3.1,2.4,4.6l0.3,0.6  C67.7,34.8,75.1,50,82,64.9L82,65c0.8,1.6,1.5,3.4,2.3,5c0.5,1.2,1,2.2,1.3,3.2C86.4,75.8,86.7,78.3,86.3,80.9z" />
  </svg>
}

const FilterIcon = ({ size }) => {

  const style = {
    display: 'block',
    stroke: 'currentcolor',
    strokeWidth: '3',
    overflow: 'visible',
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" style={style} aria-hidden="true" role="presentation" focusable="false"><path fill="none" d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"></path></svg>
  );
}

const CloseIcon = ({ size }) => {

  const style = {
    display: 'block',
    fill: 'none',
    stroke: 'currentcolor',
    strokeWidth: '3',
    overflow: 'visible',
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={style}>
      <path d="m6 6 20 20M26 6 6 26"></path>
    </svg>
  )
}

const HeartIcon = ({ size }) => {

  const style = {
    display: 'block',
    fill: "rgba(0, 0, 0, 0.5)",
    stroke: "#fff",
    strokeWidth: '2',
    overflow: 'visible',
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={style}><path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path></svg>
  );
}

const BestIcon = ({ size }) => {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" fill="currentcolor" ><path d="m26.3732689 2.47961624.6167441.48322004c1.7072543 1.33763663 2.6054782 2.90952832 2.6054782 4.67605261 0 .3660905-.0390268.72618704-.116891 1.07902433.2220822-.04940579.4535208-.09078168.6921664-.12465571l.775726-.11010878.2925061.72685288c.8097073 2.01205449.8016461 3.82246449-.0816161 5.35231939-.2032148.3519785-.4424546.6712615-.7165374.9579743l.2224321.0794128.9515555.3797252-.1101088.7757261c-.3048001 2.1473439-1.2169863 3.7111744-2.7468413 4.5944365-.5761025.332613-1.1919899.5411159-1.8434482.6285758.1841168.1929555.3637753.4031581.5393959.6273064l.48322.6167441-.48322.6167441c-1.3376366 1.7072543-2.9095283 2.6054781-4.6760526 2.6054781-1.2480882 0-2.4019214-.4496183-3.4432232-1.3171892l-.0012213.0394115c0 1.2886644 1.044669 2.3333333 2.3333334 2.3333333.5522847 0 1 .4477153 1 1s-.4477153 1-1 1c-2.3932339 0-4.3333334-1.9400994-4.3333334-4.3333333 0-.9731196.3231417-1.8972354.901435-2.6461065.0487133-.1124489.1099252-.2143841.183909-.2995515.2333023-.2685692.4731075-.5134836.719657-.7345023 1.092313-.9792012 2.3169607-1.4865064 3.6394435-1.4865064l.0684312.0004504c.3275052-1.8187509 1.1205491-3.1889128 2.3863714-4.0426116-.4569936-1.4757574-.4468151-2.8322754.0552629-4.0354282-1.4028349-1.2488618-2.1367966-2.68667211-2.1367966-4.28352171 0-1.76652429.8982238-3.33841598 2.6054781-4.67605261zm-3.5954911 19.52038376c-.8090047 0-1.5656514.3134377-2.3044395.9757225l-.1826884.1713488-.0733166.074262.1281937.1295236c.7776797.743284 1.5802193 1.0935875 2.4322508 1.0935875l.218427-.0078032c.7972463-.0573203 1.5547873-.4315014 2.2882491-1.1577185l.0555461-.056256-.0555461-.057145c-.8001401-.7922368-1.6289366-1.1655217-2.5066761-1.1655217zm3.7578827-4.4994059-.1852617.1159713c-.6617754.448264-1.1307346 1.1510849-1.4028227 2.1467382l-.0182612.0759557.0749618.0222525c1.0890601.2860271 1.9934613.1949031 2.753606-.2439667l.1852618-.1159712c.6617753-.4482641 1.1307346-1.1510849 1.4028226-2.1467383l.0193478-.0769097-.0760483-.0212985c-1.0890601-.2860271-1.9934613-.194903-2.7536061.2439667zm3.1123395-6.7679274-.0769097.0193477c-1.0861673.2968233-1.8238397.8279397-2.2627095 1.5880844l-.1024557.1930649c-.3489823.7190957-.4037025 1.5622361-.141511 2.5605412l.0222526.0749618.0759556-.0182613c1.0861673-.2968233 1.8238397-.8279397 2.2627095-1.5880844s.5299938-1.664546.2439667-2.7536061zm-3.2751755-5.65600003-.0562561.05554607c-.7922368.80014014-1.1655217 1.62893662-1.1655217 2.50667615l.0078032.21842698c.0573204.7972463.4315015 1.55478738 1.1577185 2.28824913l.0575894.0537683.0189905-.0176348c.505107-.50232394.8443631-1.01414101 1.0296433-1.53660354.1153772-.32534636.1726996-.65911739.1726996-1.00620607 0-.87773953-.3732849-1.70653601-1.1655217-2.50667615zm-20.9125938-2.59705043-.6167441.48322004c-1.70725429 1.33763663-2.60547812 2.90952832-2.60547812 4.67605261 0 .3660905.03902677.72618704.11689093 1.07902433-.22208221-.04940579-.45352077-.09078168-.69216632-.12465571l-.77572608-.11010878-.29250604.72685288c-.80970728 2.01205449-.80164608 3.82246449.08161606 5.35231939.20321486.3519785.44245466.6712615.71653743.9579743l-.2224321.0794128-.95155553.3797252.11010879.7757261c.30480015 2.1473439 1.21698637 3.7111744 2.74684128 4.5944365.57610257.332613 1.19198995.5411159 1.84344825.6285758-.18411676.1929555-.36377531.4031581-.53939589.6273064l-.48322004.6167441.48322004.6167441c1.33763662 1.7072543 2.90952832 2.6054781 4.67605261 2.6054781 1.24808813 0 2.40192143-.4496183 3.44322313-1.3171892l.0012213.0394115c0 1.2886644-1.0446689 2.3333333-2.3333333 2.3333333-.55228477 0-1.00000002.4477153-1.00000002 1s.44771525 1 1.00000002 1c2.3932339 0 4.3333333-1.9400994 4.3333333-4.3333333 0-.9731196-.3231417-1.8972354-.901435-2.6461065-.0487133-.1124489-.1099252-.2143841-.1839089-.2995515-.2333024-.2685692-.4731075-.5134836-.7196571-.7345023-1.092313-.9792012-2.3169606-1.4865064-3.63944343-1.4865064l-.06843124.0004504c-.32750516-1.8187509-1.12054908-3.1889128-2.38637136-4.0426116.45699357-1.4757574.44681506-2.8322754-.05526292-4.0354282 1.40283491-1.2488618 2.13679658-2.68667211 2.13679658-4.28352171 0-1.76652429-.89822383-3.33841598-2.60547813-4.67605261zm3.59549117 19.52038376c.8090047 0 1.56565133.3134377 2.30443953.9757225l.1826884.1713488.0733165.074262-.1281937.1295236c-.7776796.743284-1.58021923 1.0935875-2.43225073 1.0935875l-.21842698-.0078032c-.7972463-.0573203-1.55478738-.4315014-2.28824918-1.1577185l-.05554607-.056256.05554607-.057145c.80014014-.7922368 1.62893662-1.1655217 2.50667616-1.1655217zm-3.75788275-4.4994059.18526172.1159713c.66177537.448264 1.13073465 1.1510849 1.40282266 2.1467382l.01826127.0759557-.07496179.0222525c-1.08906009.2860271-1.99346135.1949031-2.75360608-.2439667l-.18526171-.1159712c-.66177538-.4482641-1.13073465-1.1510849-1.40282267-2.1467383l-.01934775-.0769097.07604828-.0212985c1.08906008-.2860271 1.99346134-.194903 2.75360607.2439667zm-3.11233948-6.7679274.07690971.0193477c1.08616726.2968233 1.82383971.8279397 2.26270948 1.5880844l.10245572.1930649c.34898228.7190957.40370248 1.5622361.14151095 2.5605412l-.02225252.0749618-.07595567-.0182613c-1.08616726-.2968233-1.8238397-.8279397-2.26270947-1.5880844s-.5299938-1.664546-.24396668-2.7536061zm3.27517551-5.65600003.05625608.05554607c.7922368.80014014 1.1655217 1.62893662 1.1655217 2.50667615l-.0078032.21842698c-.05732034.7972463-.43150144 1.55478738-1.1577185 2.28824913l-.05758942.0537683-.01899046-.0176348c-.50510698-.50232394-.84436314-1.01414101-1.02964333-1.53660354-.11537714-.32534636-.17269954-.65911739-.17269954-1.00620607 0-.87773953.3732849-1.70653601 1.1655217-2.50667615z"></path></svg>
  );
}

const SphereIcon = ({ size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false"><path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
    </svg>
  )
}

const FacebookIcon = ({ size }) => {
  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Facebook'a git" role="img" focusable="false" fill='currentColor'><path d="M30 0a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"></path><path fill="#fff" d="M22.94 16H18.5v-3c0-1.27.62-2.5 2.6-2.5h2.02V6.56s-1.83-.31-3.58-.31c-3.65 0-6.04 2.21-6.04 6.22V16H9.44v4.62h4.06V32h5V20.62h3.73z"></path></svg>
  )
}

const TwitterIcon = ({ size }) => {
  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Twitter'a git" role="img" focusable="false" fill="currentColor"><path d="M32 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4z"></path><path fill="#fff" d="M18.66 7.99a4.5 4.5 0 0 0-2.28 4.88A12.31 12.31 0 0 1 7.3 8.25a4.25 4.25 0 0 0 1.38 5.88c-.69 0-1.38-.13-2-.44a4.54 4.54 0 0 0 3.5 4.31 4.3 4.3 0 0 1-2 .06 4.64 4.64 0 0 0 4.19 3.13A8.33 8.33 0 0 1 5.8 23a12.44 12.44 0 0 0 19.32-11.19A7.72 7.72 0 0 0 27.3 9.5a8.3 8.3 0 0 1-2.5.75 4.7 4.7 0 0 0 2-2.5c-.87.5-1.81.87-2.81 1.06a4.5 4.5 0 0 0-5.34-.83z"></path></svg>
  )
}

const InstagramIcon = ({ size }) => {
  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Instagram'e git" role="img" focusable="false" fill="currentColor"><path d="M30 0H2a2 2 0 0 0-2 2v28c0 1.1.9 2 2 2h28a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path><path fill="#fff" d="M15.71 4h1.25c2.4 0 2.85.02 3.99.07 1.28.06 2.15.26 2.91.56.79.3 1.46.72 2.13 1.38.6.6 1.08 1.33 1.38 2.13l.02.06c.28.74.48 1.58.54 2.8l.01.4c.05 1.02.06 1.63.06 4.4v.92c0 2.6-.02 3.05-.07 4.23a8.78 8.78 0 0 1-.56 2.91c-.3.8-.77 1.53-1.38 2.13a5.88 5.88 0 0 1-2.13 1.38l-.06.02c-.74.28-1.59.48-2.8.53l-.4.02c-1.02.05-1.63.06-4.4.06h-.92a73.1 73.1 0 0 1-4.23-.07 8.78 8.78 0 0 1-2.91-.56c-.8-.3-1.53-.77-2.13-1.38a5.88 5.88 0 0 1-1.38-2.13l-.02-.06a8.84 8.84 0 0 1-.54-2.8l-.01-.37A84.75 84.75 0 0 1 4 16.29v-1c0-2.62.02-3.06.07-4.24.06-1.26.26-2.13.55-2.88l.01-.03c.3-.8.77-1.53 1.38-2.13a5.88 5.88 0 0 1 2.13-1.38l.06-.02a8.84 8.84 0 0 1 2.8-.54l.37-.01C12.39 4 12.99 4 15.71 4zm.91 2.16h-1.24c-2.3 0-2.91.01-3.81.05l-.42.02c-1.17.05-1.8.25-2.23.41-.56.22-.96.48-1.38.9-.4.41-.67.8-.88 1.35l-.03.06a6.7 6.7 0 0 0-.4 2.2l-.02.45c-.04.9-.05 1.53-.05 3.94v1.08c0 2.64.02 3.05.07 4.23v.07c.06 1.13.25 1.74.42 2.16.21.56.47.96.9 1.38.4.4.8.67 1.34.88l.06.03a6.7 6.7 0 0 0 2.2.4l.45.02c.9.04 1.53.05 3.94.05h1.08c2.64 0 3.05-.02 4.23-.07h.07a6.51 6.51 0 0 0 2.16-.42c.52-.19.99-.5 1.38-.9.4-.4.67-.8.88-1.34l.03-.06a6.7 6.7 0 0 0 .4-2.2l.02-.45c.04-.9.05-1.53.05-3.94v-1.09c0-2.63-.02-3.04-.07-4.22v-.07a6.51 6.51 0 0 0-.42-2.16c-.19-.52-.5-.99-.9-1.38a3.7 3.7 0 0 0-1.34-.88l-.06-.03a6.63 6.63 0 0 0-2.16-.4l-.46-.02c-.9-.04-1.5-.05-3.8-.05zM16 9.84a6.16 6.16 0 1 1 0 12.32 6.16 6.16 0 0 1 0-12.32zM16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm6.4-3.85a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z"></path></svg>
  )
}

const CheckIcon = ({ size }) => {

  const style = {
    display: 'block',
    stroke: 'currentcolor',
    strokeWidth: '4',
    overflow: 'visible',
    color: "currentcolor"
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={style}><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
  )
}

const Icon = ({ name, size = 24 }) => {
  const icons = {
    search: SearchIcon,
    logo: LogoIcon,
    filter: FilterIcon,
    close: CloseIcon,
    heart: HeartIcon,
    best: BestIcon,
    check: CheckIcon,
    sphere: SphereIcon,
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    instagram: InstagramIcon,
  };

  const Component = icons[name];
  return <Component size={size} />;
};

export { Icon };

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

SearchIcon.propTypes = {
  size: PropTypes.number,
};

LogoIcon.propTypes = {
  size: PropTypes.number,
};

FilterIcon.propTypes = {
  size: PropTypes.number,
};

CloseIcon.propTypes = {
  size: PropTypes.number,
};

HeartIcon.propTypes = {
  size: PropTypes.number,
};

BestIcon.propTypes = {
  size: PropTypes.number,
};

CheckIcon.propTypes = {
  size: PropTypes.number,
};

SphereIcon.propTypes = {
  size: PropTypes.number,
};

FacebookIcon.propTypes = {
  size: PropTypes.number,
};

TwitterIcon.propTypes = {
  size: PropTypes.number,
};

InstagramIcon.propTypes = {
  size: PropTypes.number,
};  
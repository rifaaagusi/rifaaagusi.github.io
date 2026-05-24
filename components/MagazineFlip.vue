<template>
  <hr class="sec-divider">
  <SectionReveal>
  <div class="sec" id="magazine">
    <div class="sec-top">
      <h2 class="sec-title">My Projects with Pixel Pro</h2>
      <span class="sec-sub">Yearbook · Editorial · Print</span>
    </div>

    <ProjectCoverflow
      :items="coverflowItems"
      hint="View Flipbook"
      @select="onCoverflowSelect"
    />

    <!-- Modal -->
    <MagazineModal
      v-if="activeBook"
      :book="activeBook"
      @close="activeBook = null"
    />
  </div>
  </SectionReveal>
</template>

<script setup>
import { ref, computed } from 'vue'
import MagazineModal from './MagazineModal.vue'
import { cloudCover, cloudFlipPage } from '~/utils/cloudinary'

const activeBook = ref(null)

const sdiAldorPageIds = [
  '0_ct5wvi', '1_uy5ts9', '2_d6606g', '3_e8gfpo', '4_xtjm05', '5_bqdgpx', '6_lzpumc', '7_cboomv',
  '8_tybizl', '9_gbustr', '10_yusjh7', '11_xxljrm', '12_ygfxr3', '13_h1rxit', '14_ndqvjk', '15_b3rwyy',
  '16_zhuclh', '17_qe7yuh', '18_jnlqbo', '19_cn0upc', '20_hr2tie', '21_j3o0ix', '22_podc1l', '23_esexfc',
  '24_mt97qt', '25_bs1kv7', '26_b88rpl', '27_v2zzli', '28_sdgk0v', '29_f88eeg', '30_d0ra7g', '31_jmnkel',
  '32_pgyh5e', '33_nvhcvn', '34_qnrgs5', '35_ggnbk3', '36_qn3yae', '37_doucge', '38_lrtk7y', '39_smcpeo',
  '40_dfwndb', '41_o3cfoz', '42_dlsblk', '43_pqo0jf', '44_akwvp8', '45_h8hdcf', '46_w24syu', '47_rgvyux',
  '48_j9pzzr', '49_ohv4lx', '50_xh1azg', '51_oz4ajd', '52_lsarlb', '53_eqnenn', '54_znindl', '55_pqtfjo',
  '56_uofnek', '57_jva0sv', '58_ofppxw', '59_cp8twj', '60_ntg9wv', '61_vqui98', '62_afdjwm', '63_xkoe0f',
  '64_n2irrg', '65_fklmnz', '66_fkjybe', '67_ilpgbr', '68_mw0dur', '69_xnidxe', '70_raxntg', '71_camyz8',
  '72_iyj6ot', '73_qeddag', '74_m5kfgt', '75_fveix4', '76_n7d8zo', '77_ukphba', '78_pitxgy', '79_rs8fc4',
  '80_xz5dft', '81_sb4uav', '82_ltzfyr', '83_ukvmen', '84_buail2', '85_fsuv3u', '86_mghyjv', '87_zggk29',
  '88_knsb03', '89_v1zylf', '90_kkf5p2', '91_wjmyu9', '92_tq4yzw', '93_z9lahg', '94_bqyiv7', '95_uhxrkx',
  '96_vmcry5', '97_dqv0ha', '98_nswthz', '99_u3fwxw', '100_r1sk4q', '101_jpmb3w',
]

const books = [
  {
    id: 'sman1',
    title: 'SMAN 1 Jakarta Yearbook',
    sub: 'Yearbook · 2026',
    cover: cloudCover('v1779621346/bodoet_mockup_wiwmuh'),
    totalPages: 94,
    images: [
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/0_ikm90t',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/1_fsbxbd',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/2_yovmxc',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/3_do5qh4',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/4_elzryx',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/5_lf0wdm',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/6_cjcdhk',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/7_rj2tec',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/8_j6ehoe',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/9_bjnfwm',
      cloudFlipPage('v1779007376/10_obilwq'),
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/11_hprebu',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/12_bcb6vt',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/13_z1mn08',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/14_xl9bui',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/15_midifx',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/16_bqrycc',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/17_qfehyj',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/18_silwnc',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/19_ks8no8',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/20_cgoiqr',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/21_e86g2u',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/22_lyrlvd',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/23_zltla8',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/24_dt9srq',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/25_rsr0wb',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/26_mapwsu',
      cloudFlipPage('v1779007439/27_i1camp'),
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/28_iykdb5',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/29_ko2lif',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/30_vt3ztt',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/31_oftxya',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/32_dhlwd5',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/33_jgiip8',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/34_prwxl6',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/35_uoltt4',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/36_njf1od',
      cloudFlipPage('v1779007456/37_rr9ikl'),
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/38_cjpisg',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/39_lorlpj',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/40_d8lhhh',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/41_dwtqmh',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/42_ibh5to',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/43_cajftc',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/44_oo1dxn',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/45_tyrz1l',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/46_pqarrr',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/47_dv5cke',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/48_rjj6od',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/49_pmgk9l',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/50_srznkp',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/51_pqxzde',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/52_xvq7rr',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/53_kuypxi',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/54_bdgsto',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/55_lad4vp',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/56_h9pi1i',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/57_tasefs',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/58_s1a4vc',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/59_fcktlr',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/60_wiepgy',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/61_ztqait',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/62_osxaml',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/63_o9tgv3',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/64_kjcrlk',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/65_qlwl2r',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/66_wowcxg',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/67_upbal2',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/68_drcgis',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/69_bjmwy6',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/70_w8uxyt',
      cloudFlipPage('v1779007245/71_noj8i5'),
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/72_kqpeso',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/73_anaknc',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/74_pv7xl3',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/75_xdawtl',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/76_cebucx',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/77_lbbw6h',
      cloudFlipPage('v1779007247/78_OK_tva5o9'),
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/79_g9h5ue',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/80_vz10ho',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/81_o17mmp',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/82_xv7c3t',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/83_dqfo2i',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/84_sn6p8u',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/85_retngw',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/86_g88t0b',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/87_gpxwuc',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/88_ksizrg',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/89_vjfwgt',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/90_lhccpi',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/91_xetgc8',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/92_lbszcb',
      'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/93_ffz08e',
    ],
  },
  {
    id: 'SD aldor',
    title: 'SDI Al Azhar 5 Kemandoran',
    sub: 'Yearbook · 2026',
    cover: cloudCover('v1779621344/mockup_sdi_aldor_yycdbv'),
    totalPages: 102,
    images: sdiAldorPageIds.map(cloudFlipPage),
  },
  {
  id: 'sdi-al-azhar-23',
  title: 'SDI Al Azhar 23 Jatikramat',
  sub: 'Yearbook · 2026',
  cover: cloudCover('v1779617186/al_jatik_mockup_peg5cc'),
  totalPages: 0,
  imagePath: '',
},
{
  id: 'smp-al-azhar-9',
  title: 'SMP Al Azhar 9 Bekasi',
  sub: 'Yearbook · 2026',
  cover: cloudCover('v1779617185/smp_al_kp_mockup_sdfsdn'),
  totalPages: 0,
  imagePath: '',
},
{
  id: 'sman10-palembang',
  title: 'SMAN 10 Palembang',
  sub: 'Yearbook · 2026',
  cover: cloudCover('v1779617188/sman_10_palembang_mockup_ouhwdq'),
  totalPages: 130,
  images: [
    cloudFlipPage('v1779631460/0_dyg9rv'),
    cloudFlipPage('v1779378368/1._bzp0ad'),
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/2_g9zzcz',
    cloudFlipPage('v1779378603/3._y1co6w'),
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/4_bxzxri',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/5_vh3pak',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/6_zyv51n',
    cloudFlipPage('v1779378367/7._exx3tz'),
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/8_udmoq0',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/9_y7tanv',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/10_e2zf15',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/11_ejhbpj',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/12_gsteel',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/13_kod2wr',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/14_nxhqr8',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/15_o3jytq',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/16_xxkljv',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/17_zht5eg',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/18_qdodf7',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/19_ldgwuj',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/20_et7xo9',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/21_cppmyl',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/22_ruifqb',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/23_ilkcdq',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/24_otxubf',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/25_npwy7b',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/26_tvknge',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/27_lrn7mv',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/28_zp0to4',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/29_wmp94e',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/30_xqyha9',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/31_wnwxij',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/32_cdtaor',
    cloudFlipPage('v1779378615/33_yi4jmf'),
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/34_bikzns',
    cloudFlipPage('v1779378385/35._tnffuz'),
    cloudFlipPage('v1779378606/36._mdpy1o'),
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/37_cwzbdo',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/38_d2xhsy',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/39_qzgcsw',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/40_ffkbbs',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/41_gspvww',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/42_foll7m',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/43_jugexg',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/44_qf9uit',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/45_knki4t',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/46_cbrrvj',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/47_bg3n4f',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/48_jb2tja',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/49_tvjb7e',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/50_ls1m5a',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/51_ys8htz',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/52_nerumm',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/53_ieemty',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/54_fptiqe',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/55_qyp3bb',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/56_j7knwg',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/57_whkw59',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/58_s1spry',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/59_ob5riv',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/60_sbbofp',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/61_eonwjv',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/62_chw9b4',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/63_kjknrl',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/64_j0jtl2',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/65_jgmbaj',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/66_epgp7l',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/67_fpeqwb',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/68_s1rfqt',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/69_bna8mm',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/70_gbgeff',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/71_ywuzkk',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/72_ixama1',
    cloudFlipPage('v1779378311/73_zjjkby'),
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/74_ca7wiv',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/75_vsj71u',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/76_ynzo0c',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/77_lhxija',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/78_ub1y8d',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/79_bcsiag',
    cloudFlipPage('v1779378327/80_izijgn'),
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/81_htsd89',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/82_x443b6',
    cloudFlipPage('v1779378329/83_utilst'),
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/84_tthexx',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/85_hcwevx',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/86_nngixv',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/87_wpnpym',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/88_c6fug1',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/89_aymo9u',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/90_l7yuxt',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/91_ahrzia',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/92_zmfryi',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/93_yrv6dr',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/94_akq9sk',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/95_lizu1u',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/96_w9lahd',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/97_kos5bt',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/98_dltwe1',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/99_ygyq47',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/100_zjc7r7',
    cloudFlipPage('v1779378322/101_efciib'),
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/102_wmnvxr',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/103_zco5mo',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/104_ifirfd',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/105_eubzew',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/106_lhrrst',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/107_zg7fys',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/108_yc0bqi',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/109_qsy6wn',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/110_cvhezk',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/111_m1rrmt',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/112_cntjte',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/113_h0rbim',
    cloudFlipPage('v1779378325/114_ovll59'),
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/115_oyryir',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/116_fdihdz',
    cloudFlipPage('v1779378311/117_ijfccd'),
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/118_zonlkr',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/119_nzqdxm',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/120_j8s2hu',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/121_wedrxx',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/122_j9kmgl',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/123_i9pmnh',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/124_ekdbw6',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/125_thopfp',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/126_gpm2qp',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/127_nxvcuj',
    'https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto,w_800/128_mqhb57',
    cloudFlipPage('v1779631460/129_dwdywp'),
  ]
},
]

const coverflowItems = computed(() =>
  books.map((book) => ({
    id: book.id,
    image: book.cover,
    title: book.title,
    sub: book.sub,
  }))
)

function onCoverflowSelect(item) {
  const book = books.find((b) => b.id === item.id)
  if (book) openBook(book)
}

function openBook(book) {
  if (!book.images?.length && !book.totalPages) {
    alert('This project is coming soon!')
    return
  }
  activeBook.value = book
}
</script>

<style scoped>
.mockup-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
}

.mockup-card {
  cursor: pointer;
  transition: transform 0.25s;
}

.mockup-card:hover {
  transform: translateY(-6px);
}

.mockup-img-wrap {
  position: relative;
  overflow: hidden;
  border: 0.5px solid var(--border);
  aspect-ratio: 3/4;
}

.mockup-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: filter 0.3s;
}

.mockup-card:hover .mockup-img {
  filter: brightness(0.5);
}

.mockup-hover {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.mockup-card:hover .mockup-hover {
  opacity: 1;
}

.mockup-hint {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: var(--accent);
  color: var(--bg);
  padding: 8px 18px;
  font-family: var(--font-body);
}

.mockup-info {
  padding: 0.9rem 0 0;
}

.mockup-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--white);
}

.mockup-sub {
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 4px;
}
</style>

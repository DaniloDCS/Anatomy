const bones = [{
    "name": "Aparelho locomotor",
    "icon": "fas fa-x-ray",
    "content": [{
        "name": "Sistema Locomotor",
        "icon": "fas fa-x-ray",
        "bones": [{
          "name": "Crânio - Vista Anterior",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Margem supra-orbital",
            "image": "/images/"
          }, {
            "name": "Margem infra-orbital",
            "image": "/images/"
          }, {
            "name": "Forame ou incisura supra-orbital",
            "image": "/images/"
          }, {
            "name": "Fissura orbital superior",
            "image": "/images/"
          }, {
            "name": "Fissura orbital inferior",
            "image": "/images/"
          }, {
            "name": "Canal óptico",
            "image": "/images/"
          }, {
            "name": "Forame infra-orbital",
            "image": "/images/"
          }, {
            "name": "Espinha nasal anterior",
            "image": "/images/"
          }, {
            "name": "Septo nasal",
            "image": "/images/"
          }, {
            "name": "Asa menor do esfenoide",
            "image": "/images/"
          }, {
            "name": "Asa maior do esfenoide",
            "image": "/images/"
          }, {
            "name": "Processo zigomático do frontal",
            "image": "/images/"
          }]
        }, {
          "name": "Crânio - Vista Lateral",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Linha temporal superior",
            "image": "/images/"
          }, {
            "name": "Linha temporal inferior",
            "image": "/images/"
          }, {
            "name": "Túber parietal",
            "image": "/images/"
          }, {
            "name": "Meato acústico externo",
            "image": "/images/"
          }, {
            "name": "Processo zigomático do temporal",
            "image": "/images/"
          }, {
            "name": "Processo temporal do zigomático",
            "image": "/images/"
          }, {
            "name": "Arco zigomático",
            "image": "/images/"
          }, {
            "name": "Fossa temporal",
            "image": "/images/"
          }]
        }, {
          "name": "Crânio - Vista Inferior",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Forame incisivo",
            "image": "/images/"
          }, {
            "name": "Processo palatino da maxila",
            "image": "/images/"
          }, {
            "name": "Lâmina horizontal do palatino",
            "image": "/images/"
          }, {
            "name": "Forame palatino maior",
            "image": "/images/"
          }, {
            "name": "Processo pterigóideo(lâminas medial e lateral)",
            "image": "/images/"
          }, {
            "name": "Hâmulo do pterigóide",
            "image": "/images/"
          }, {
            "name": "Espinha nasal posterior",
            "image": "/images/"
          }, {
            "name": "Vômer",
            "image": "/images/"
          }, {
            "name": "Processo mastóideo",
            "image": "/images/"
          }, {
            "name": "Côndilo do occipital",
            "image": "/images/"
          }, {
            "name": "Protuberância occipital externa",
            "image": "/images/"
          }, {
            "name": "Forame magno",
            "image": "/images/"
          }, {
            "name": "Canal do nervo hipoglosso",
            "image": "/images/"
          }, {
            "name": "Tubérculo articular",
            "image": "/images/"
          }, {
            "name": "Fossa mandibular",
            "image": "/images/"
          }, {
            "name": "Forame oval",
            "image": "/images/"
          }, {
            "name": "Forame lacerado",
            "image": "/images/"
          }]
        }, {
          "name": "Crânio - Vista Interna",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Fossa anterior do crânio",
            "image": "/images/"
          }, {
            "name": "Crista frontal",
            "image": "/images/"
          }, {
            "name": "Crista etmoidal",
            "image": "/images/"
          }, {
            "name": "Forame cego",
            "image": "/images/"
          }, {
            "name": "Lâmina cribriforme do etmóide",
            "image": "/images/"
          }, {
            "name": "Canal óptico",
            "image": "/images/"
          }, {
            "name": "Fossa média do crânio",
            "image": "/images/"
          }, {
            "name": "Processo clinóide anterior",
            "image": "/images/"
          }, {
            "name": "Processo clinóide posterior",
            "image": "/images/"
          }, {
            "name": "Fossa hipofisária",
            "image": "/images/"
          }, {
            "name": "Dorso da sela",
            "image": "/images/"
          }, {
            "name": "Canal Condilar",
            "image": "/images/"
          }, {
            "name": "Forame espinhoso",
            "image": "/images/"
          }, {
            "name": "Canal carótico",
            "image": "/images/"
          }, {
            "name": "Processo estilóide",
            "image": "/images/"
          }, {
            "name": "Forame redondo",
            "image": "/images/"
          }, {
            "name": "Forame oval",
            "image": "/images/"
          }, {
            "name": "Forame espinhoso",
            "image": "/images/"
          }, {
            "name": "Forame lacerado",
            "image": "/images/"
          }, {
            "name": "Fossa posterior do crânio",
            "image": "/images/"
          }, {
            "name": "Forame jugular",
            "image": "/images/"
          }, {
            "name": "Forame magno",
            "image": "/images/"
          }, {
            "name": "Meato acústico interno",
            "image": "/images/"
          }, {
            "name": "Protuberância occipital interna",
            "image": "/images/"
          }, {
            "name": "Asa menor do esfenóide",
            "image": "/images/"
          }, {
            "name": "Asa maior do esfenoide",
            "image": "/images/"
          }, {
            "name": "Forame estilomastóideo",
            "image": "/images/"
          }, {
            "name": "Fossa jugular",
            "image": "/images/"
          }, {
            "name": "Forame jugular",
            "image": "/images/"
          }]
        }, {
          "name": "Mandíbula",
          "icon": "/images/mandibula/game.jpg",
          "views": true,
          "accidents": [{
            "name": "Cabeça",
            "image": "/images/mandibula/cabeca.png"
          }, {
            "name": "Processo coronóide",
            "image": "/images/mandibula/processo-coronoide.png"
          }, {
            "name": "Forame mentual",
            "image": "/images/mandibula/forame-mentual.png"
          }, {
            "name": "Ramo",
            "image": "/images/mandibula/ramo.png"
          }, {
            "name": "Forame mandibular",
            "image": "/images/mandibula/forame-mandibular.png"
          }, {
            "name": "Corpo",
            "image": "/images/mandibula/corpo.png"
          }, {
            "name": "Protuberância mentual",
            "image": "/images/mandibula/protuberancia-mentual.png"
          }, {
            "name": "Ângulo",
            "image": "/images/mandibula/angulo.png"
          }, {
            "name": "Processo condilar",
            "image": "/images/mandibula/processo-condilar.png"
          }, {
            "name": "Espinha geniana",
            "image": "/images/mandibula/espinha-geniana.png"
          }, {
            "name": "Incisura da Mandíbula",
            "image": "/images/mandibula/incisura-da-mandibula.png"
          }, {
            "name": "Processo alveolar",
            "image": "/images/mandibula/processo-alveolar.png"
          }]
        }, {
          "name": "Atlas - C1",
          "views": true,
          "icon": "images/atlas(C1)/game.png",
          "accidents": [{
            "name": "Tubérculo anterior",
            "image": "/images/atlas(C1)/turberculo-anterior.png"
          }, {
            "name": "Tubérculo posterior",
            "image": "/images/atlas(C1)/turberculo-posterior.png"
          }, {
            "name": "Arco anterior",
            "image": "/images/atlas(C1)/arco-anterior.png"
          }, {
            "name": "Arco posterior",
            "image": "/images/atlas(C1)/arco-posterior.png"
          }, {
            "name": "Face articular inferior",
            "image": "/images/atlas(C1)/face-articular-inferior.png"
          }, {
            "name": "Face articular superior",
            "image": "/images/atlas(C1)/face-articular-superior.png"
          }, {
            "name": "Processo transverso",
            "image": "/images/atlas(C1)/processo-transverso.png"
          }, {
            "name": "Forame transverso",
            "image": "/images/atlas(C1)/forame-transverso.png"
          }, {
            "name": "Forame vertebral",
            "image": "/images/atlas(C1)/forame-vertebral.png"
          }, {
            "name": "Fóvea do dente do áxis",
            "image": "/images/atlas(C1)/fovea-do-dente-do-axis.png"
          }]
        }, {
          "name": "Axis - C2",
          "views": true,
          "icon": "images/axis(C2)/game.png",
          "accidents": [{
            "name": "Dente",
            "image": "/images/axis(C2)/dente.png"
          }, {
            "name": "Corpo",
            "image": "/images/axis(C2)/corpo.png"
          }, {
            "name": "Arco",
            "image": "/images/axis(C2)/arco.png"
          }, {
            "name": "Pedículo do arco",
            "image": "/images/axis(C2)/pediculo-do-arco.png"
          }, {
            "name": "Lâmina do arco",
            "image": "/images/axis(C2)/lamina-do-arco.png"
          }, {
            "name": "Processo articular superior",
            "image": "/images/axis(C2)/processo-articular-superior.png"
          }, {
            "name": "Processo articular inferior",
            "image": "/images/axis(C2)/processo-articular-inferior.png"
          }, {
            "name": "Processo transverso",
            "image": "/images/axis(C2)/processo-transverso.png"
          }]
        }, {
          "name": "DEMAIS VÉRTEBRAS CERVICAIS (C3, C4, C5, C6 e C7)",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Corpo",
            "image": "/images/"
          }, {
            "name": "Arco",
            "image": "/images/"
          }, {
            "name": "Pedículo do arco",
            "image": "/images/"
          }, {
            "name": "Lâmina do arco",
            "image": "/images/"
          }, {
            "name": "Processo articular superior",
            "image": "/images/"
          }, {
            "name": "Processo articular inferior",
            "image": "/images/"
          }, {
            "name": "Processo transverso",
            "image": "/images/"
          }, {
            "name": "Forame transverso",
            "image": "/images/"
          }, {
            "name": "Forame vertebral",
            "image": "/images/"
          }, {
            "name": "Processo espinhoso",
            "image": "/images/"
          }, {
            "name": "Tubérculo anterior",
            "image": "/images/"
          }, {
            "name": "Tubérculo posterior",
            "image": "/images/"
          }]
        }, {
          "name": "VÉRTEBRAS TORÁCICAS",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Corpo",
            "image": "/images/"
          }, {
            "name": "Arco",
            "image": "/images/"
          }, {
            "name": "Pedículo do arco",
            "image": "/images/"
          }, {
            "name": "Lâmina do arco",
            "image": "/images/"
          }, {
            "name": "Processo articular superior",
            "image": "/images/"
          }, {
            "name": "Processo articular inferior",
            "image": "/images/"
          }, {
            "name": "Processo transverso",
            "image": "/images/"
          }, {
            "name": "Forame vertebral",
            "image": "/images/"
          }, {
            "name": "Processo espinhoso",
            "image": "/images/"
          }, {
            "name": "Fóvea costal superior",
            "image": "/images/"
          }, {
            "name": "Fóvea costal inferior",
            "image": "/images/"
          }, {
            "name": "Fóvea costal do processo transverso",
            "image": "/images/"
          }]
        }, {
          "name": "VÉRTEBRAS TORÁCICAS",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Corpo",
            "image": "/images/"
          }, {
            "name": "Arco",
            "image": "/images/"
          }, {
            "name": "Pedículo do arco",
            "image": "/images/"
          }, {
            "name": "Lâmina do arco",
            "image": "/images/"
          }, {
            "name": "Processo articular superior",
            "image": "/images/"
          }, {
            "name": "Processo articular inferior",
            "image": "/images/"
          }, {
            "name": "Processo transverso",
            "image": "/images/"
          }, {
            "name": "Forame vertebral",
            "image": "/images/"
          }, {
            "name": "Processo espinhoso",
            "image": "/images/"
          }, {
            "name": "Processo mamilar",
            "image": "/images/"
          }, {
            "name": "Processo acessório",
            "image": "/images/"
          }]
        }, {
          "name": "Sacro",
          "icon": "images/coccix/game.jpg",
          "views": true,
          "accidents": [{
            "name": "Crista sacral mediana",
            "image": "/images/sacro/crista-sacral-mediana.png"
          }, {
            "name": "Crista sacral lateral",
            "image": "/images/sacro/crista-sacral-lateral.png"
          }, {
            "name": "Crista sacral medial",
            "image": "/images/sacro/crista-sacral-medial.png"
          }, {
            "name": "Forames sacrais posteriores",
            "image": "/images/sacro/forames-sacrais-posteriores.png"
          }, {
            "name": "Forames sacrais anteriores",
            "image": "/images/sacro/forames-sacrais-anteriores.png"
          }, {
            "name": "Canal sacral",
            "image": "/images/sacro/canal-sacral.png"
          }, {
            "name": "Processo articular superior",
            "image": "/images/sacro/processo-articular-superior.png"
          }, {
            "name": "Asa do sacro",
            "image": "/images/sacro/asa-do-sacro.png"
          }, {
            "name": "Promontório",
            "image": "/images/sacro/promontorio.png"
          }, {
            "name": "Hiato sacral",
            "image": "/images/sacro/hiato-sacral.png"
          }, {
            "name": "Face auricular",
            "image": "/images/sacro/face-auricular.png"
          }, {
            "name": "Corno sacral",
            "image": "/images/sacro/corno-sacral.png"
          }]
        }, {
          "name": "Cóccix",
          "icon": "images/coccix/game.jpg",
          "views": true,
          "accidents": [{
            "name": "Cóccix",
            "image": "/images/coccix/coccix.png"
          }]
        }, {
          "name": "Costelas",
          "views": true,
          "icon": "images/costela/game.png",
          "accidents": [{
            "name": "cabeça",
            "image": "/images/costela/cabeca.png"
          }, {
            "name": "tubérculo",
            "image": "/images/costela/tuberculo.png"
          }, {
            "name": "colo",
            "image": "/images/costela/colo.png"
          }, {
            "name": "corpo",
            "image": "/images/costela/corpo.png"
          }, {
            "name": "extremidade esternal",
            "image": "/images/costela/"
          }, {
            "name": "Face Articular",
            "image": "/images/costela/face-articular.png"
          }]
        }, {
          "name": "Esterno",
          "views": true,
          "icon": "images/esterno/game.png",
          "accidents": [{
            "name": "Manúbrio",
            "image": "/images/esterno/manubrio.png"
          }, {
            "name": "Corpo",
            "image": "/images/esterno/corpo.png"
          }, {
            "name": "Processo xifóide",
            "image": "/images/esterno/processo-xifoide.png"
          }, {
            "name": "Incisura clavicular",
            "image": "/images/esterno/incisura-clavicular.png"
          }, {
            "name": "Incisura jugular",
            "image": "/images/esterno/incisura-julgular.png"
          }, {
            "name": "Ângulo do esterno",
            "image": "/images/esterno/angulo.png"
          }, {
            "name": "I Incisura costal",
            "image": "/images/esterno/i-incisura.png"
          }, {
            "name": "II Incisura costal",
            "image": "/images/esterno/ii-incisura.png"
          }, {
            "name": "III Incisura costal",
            "image": "/images/esterno/iii-incisura.png"
          }, {
            "name": "VI Incisura costal",
            "image": "/images/esterno/iv-incisura.png"
          }, {
            "name": "V Incisura costal",
            "image": "/images/esterno/v-incisura.png"
          }, {
            "name": "VI Incisura costal",
            "image": "/images/esterno/vi-incisura.png"
          }, {
            "name": "VII Incisura costal",
            "image": "/images/esterno/vii-incisura.png"
          }]
        }, {
          "name": "Ílio",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Corpo do ílio",
            "image": "/images/"
          }, {
            "name": "Asa do ílio",
            "image": "/images/"
          }, {
            "name": "Crista ilíaca",
            "image": "/images/"
          }, {
            "name": "Espinha ilíaca ântero-superior",
            "image": "/images/"
          }, {
            "name": "Espinha ilíaca ântero-inferior",
            "image": "/images/"
          }, {
            "name": "Espinha ilíaca póstero-superior",
            "image": "/images/"
          }, {
            "name": "Espinha ilíaca póstero-inferior",
            "image": "/images/"
          }, {
            "name": "Incisura isquiática maior",
            "image": "/images/"
          }, {
            "name": "Face glútea",
            "image": "/images/"
          }, {
            "name": "Linha glútea anterior",
            "image": "/images/"
          }, {
            "name": "Linha glútea posterior",
            "image": "/images/"
          }, {
            "name": "Linha glútea inferior",
            "image": "/images/"
          }, {
            "name": "Fossa ilíaca",
            "image": "/images/"
          }, {
            "name": "Linha arqueada",
            "image": "/images/"
          }, {
            "name": "Eminência ílio-púbica",
            "image": "/images/"
          }, {
            "name": "Face sacro-pélvica",
            "image": "/images/"
          }, {
            "name": "Tuberosidade ilíaca",
            "image": "/images/"
          }, {
            "name": "Face auricular",
            "image": "/images/"
          }]
        }, {
          "name": "Ísquio",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Ramo do ísquio",
            "image": "/images/"
          }, {
            "name": "Corpo do ísquio ",
            "image": "/images/"
          }, {
            "name": "Túber isquiático",
            "image": "/images/"
          }, {
            "name": "Espinha isquiática",
            "image": "/images/"
          }, {
            "name": "Incisura isquiática menor",
            "image": "/images/"
          }]
        }, {
          "name": "Púbis",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "image": "Corpo do púbis",
            "image": "/images/"
          }, {
            "image": "Ramo superior do púbis",
            "image": "/images/"
          }, {
            "image": "Crista Obturada",
            "image": "/images/"
          }, {
            "image": "Ramo inferior do púbis",
            "image": "/images/"
          }, {
            "image": "Linha pectínea do púbis",
            "image": "/images/"
          }, {
            "image": "Tubérculo púbico",
            "image": "/images/"
          }, {
            "image": "Face sinfisial",
            "image": "/images/"
          }, {
            "image": "Forame obturado",
            "image": "/images/"
          }, {
            "image": "Acetábulo",
            "image": "/images/"
          }, {
            "image": "Face semilunar do acetábulo",
            "image": "/images/"
          }, {
            "image": "Fossa do acetábulo",
            "image": "/images/"
          }, {
            "image": "Incisura do acetábulo",
            "image": "/images/"
          }]
        }, {
          "name": "Fêmur",
          "views": true,
          "icon": "images/femur/game.png",
          "accidents": [{
            "name": "Cabeça",
            "image": "/images/femur/cabeca.png"
          }, {
            "name": "Fóvea da cabeça",
            "image": "/images/femur/fovea-da-cabeca.png"
          }, {
            "name": "Colo",
            "image": "/images/femur/colo.png"
          }, {
            "name": "Trocanter maior",
            "image": "/images/femur/trocanter-maior.png"
          }, {
            "name": "Trocanter menor",
            "image": "/images/femur/trocanter-menor.png"
          }, {
            "name": "Fossa trocantérica",
            "image": "/images/femur/fossa-trocanterica.png"
          }, {
            "name": "Crista intertrocantérica",
            "image": "/images/femur/crista-intertrcanterica.png"
          }, {
            "name": "Linha intertrocantérica",
            "image": "/images/femur/linha-intertrocanterica.png"
          }, {
            "name": "Tuberosidade glútea",
            "image": "/images/femur/tuberosidade-glutea.png"
          }, {
            "name": "Linha áspera",
            "image": "/images/femur/linha-aspera.png"
          }, {
            "name": "Corpo do fêmur",
            "image": "/images/femur/corpo.png"
          }, {
            "name": "Côndilo lateral",
            "image": "/images/femur/condilo-lateral.png"
          }, {
            "name": "Côndilo medial",
            "image": "/images/femur/condilo-medial.png"
          }, {
            "name": "Epicôndilo lateral",
            "image": "/images/femur/epicondilo-lateral.png"
          }, {
            "name": "Epicôndilo medial",
            "image": "/images/femur/epicondilo-medial.png"
          }, {
            "name": "Linha supracondilar lateral",
            "image": "/images/femur/linha-supercondilar-lateral.png"
          }, {
            "name": "Linha supracondilar medial",
            "image": "/images/femur/linha-supercondilar-medial.png"
          }, {
            "name": "Fossa intercondilar",
            "image": "/images/femur/fossa-intercondilar.png"
          }, {
            "name": "Face patelar",
            "image": "/images/femur/face-patela.png"
          }, ]
        }, {
          "name": "Patela",
          "icon": "images/patela/game.jpg",
          "views": true,
          "accidents": [{
            "name": "Face anterior",
            "image": "/images/patela/patela.png"
          }, {
            "name": "Face posterior",
            "image": "/images/patela/patela.png"
          }, {
            "name": "Base (proximal)",
            "image": "/images/patel/patela.png"
          }, {
            "name": "Ápice (distal)",
            "image": "/images/patela/patela.png"
          }]
        }, {
          "name": "Tíbia",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Côndilo lateral",
            "image": "/images/"
          }, {
            "name": "Côndilo medial",
            "image": "/images/"
          }, {
            "name": "Eminência intercondilar",
            "image": "/images/"
          }, {
            "name": "Tubérculo intercondilar lateral",
            "image": "/images/"
          }, {
            "name": "Tubérculo intercondilar medial",
            "image": "/images/"
          }, {
            "name": "Área intercondilar anterior",
            "image": "/images/"
          }, {
            "name": "Área intercondilar posterior",
            "image": "/images/"
          }, {
            "name": "Tuberosidade da tíbia",
            "image": "/images/"
          }, {
            "name": "Face articular para a fíbula",
            "image": "/images/"
          }, {
            "name": "Corpo da tíbia",
            "image": "/images/"
          }, {
            "name": "Margem interóssea",
            "image": "/images/"
          }, {
            "name": "Incisura fibular",
            "image": "/images/"
          }, {
            "name": "Maléolo medial",
            "image": "/images/"
          }]
        }, {
          "name": "Fíbula",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Cabeça da fíbula",
            "image": "/images/"
          }, {
            "name": "Colo da fíbula",
            "image": "/images/"
          }, {
            "name": "Margem interóssea",
            "image": "/images/"
          }, {
            "name": "Maléolo lateral",
            "image": "/images/"
          }, {
            "name": "Sulco maleolar",
            "image": "/images/"
          }, {
            "name": "Fossa maleolar",
            "image": "/images/"
          }]
        }, {
          "name": "Ossos do Tarsos - Proximais",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Tálus (do latim talus = tornozelo)",
            "image": "/images/"
          }, {
            "name": "Calcâneo (do latim calx = calcanhar) ",
            "image": "/images/"
          }]
        }, {
          "name": "Ossos do Tarsos - Distais",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Navicular (do latim navicula = pequeno navio)",
            "image": "/images/"
          }, {
            "name": "Cubóide (do latim cubus = cubo)",
            "image": "/images/"
          }, {
            "name": "Cuneiforme medial (do latim cunaeus = cunha e formis = forma)",
            "image": "/images/"
          }, {
            "name": "Cuneiforme intermédio",
            "image": "/images/"
          }, {
            "name": "Cuneiforme lateral ",
            "image": "/images/"
          }, ]
        }, {
          "name": "Ossos Metatarsais",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "I Metatarso",
            "image": "/images/"
          }, {
            "name": "II Metatarso",
            "image": "/images/"
          }, {
            "name": "III Metatarso",
            "image": "/images/"
          }, {
            "name": "IV Metatarso",
            "image": "/images/"
          }, {
            "name": "V Metatarso",
            "image": "/images/"
          }]
        }, {
          "name": "Falanges Tarsais",
          "views": false,
          "icon": "images/",
          "accidents": []
        }, {
          "name": "Clavícula",
          "views": true,
          "icon": "images/clavicula/game.png",
          "accidents": [{
            "name": "Extremidade acromial",
            "image": "/images/clavicula/extremidade-acromial.png"
          }, {
            "name": "Extremidade esternal",
            "image": "/images/clavicula/extremidade-esternal.png"
          }, {
            "name": "Corpo da clavícula",
            "image": "/images/clavicula/corpo.png"
          }, {
            "name": "Face articular acromial",
            "image": "/images/clavicula/face-articular-acromial.png"
          }, {
            "name": "Face articular esternal",
            "image": "/images/clavicula/face-articular-esternal.png"
          }, {
            "name": "Tubérculo conóide",
            "image": "/images/clavicula/tuberculo-conoide.png"
          }]
        }, {
          "name": "Escápula",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Face posterior",
            "image": "/images/"
          }, {
            "name": "Face costal (anterior)",
            "image": "/images/"
          }, {
            "name": "Margem superior",
            "image": "/images/"
          }, {
            "name": "Margem lateral",
            "image": "/images/"
          }, {
            "name": "Margem medial",
            "image": "/images/"
          }, {
            "name": "Ângulo superior",
            "image": "/images/"
          }, {
            "name": "Ângulo inferior",
            "image": "/images/"
          }, {
            "name": "Colo",
            "image": "/images/"
          }, {
            "name": "Espinha da escápula",
            "image": "/images/"
          }, {
            "name": "Acrômio",
            "image": "/images/"
          }, {
            "name": "Fossa supra–espinal",
            "image": "/images/"
          }, {
            "name": "Fossa infra–espinal",
            "image": "/images/"
          }, {
            "name": "Fossa subescapular",
            "image": "/images/"
          }, {
            "name": "Cavidade glenoidal",
            "image": "/images/"
          }, {
            "name": "Tubérculo supraglenoidal",
            "image": "/images/"
          }, {
            "name": "Tubérculo infraglenoidal",
            "image": "/images/"
          }, {
            "name": "Processo coracóide",
            "image": "/images/"
          }, {
            "name": "Incisura da escápula",
            "image": "/images/"
          }]
        }, {
          "name": "Úmero",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Cabeça",
            "image": "/images/"
          }, {
            "name": "Colo anatômico",
            "image": "/images/"
          }, {
            "name": "Colo cirúrgico",
            "image": "/images/"
          }, {
            "name": "Tubérculo maior",
            "image": "/images/"
          }, {
            "name": "Tubérculo menor",
            "image": "/images/"
          }, {
            "name": "Crista do tubérculo maior",
            "image": "/images/"
          }, {
            "name": "Crista do tubérculo menor",
            "image": "/images/"
          }, {
            "name": "Sulco intertubercular",
            "image": "/images/"
          }, {
            "name": "Tuberosidade deltóidea (para o músculo deltóide)",
            "image": "/images/"
          }, {
            "name": "Capítulo",
            "image": "/images/"
          }, {
            "name": "Tróclea",
            "image": "/images/"
          }, {
            "name": "Epicôndilo medial",
            "image": "/images/"
          }, {
            "name": "Epicôndilo lateral",
            "image": "/images/"
          }, {
            "name": "Crista supra - epicondilar medial",
            "image": "/images/"
          }, {
            "name": "Cista supra - epicondilar lateral",
            "image": "/images/"
          }, {
            "name": "Sulco do N.radial",
            "image": "/images/"
          }, {
            "name": "Fossa radial",
            "image": "/images/"
          }, {
            "name": "Fossa coronóidea",
            "image": "/images/"
          }, {
            "name": "Fossa do olécrano",
            "image": "/images/"
          }]
        }, {
          "name": "Ulna",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Incisura troclear",
            "image": "/images/"
          }, {
            "name": "Incisura radial",
            "image": "/images/"
          }, {
            "name": "Processo coronóide",
            "image": "/images/"
          }, {
            "name": "Tuberosidade da ulna",
            "image": "/images/"
          }, {
            "name": "Crista do músculo supinador",
            "image": "/images/"
          }, {
            "name": "Olécrano",
            "image": "/images/"
          }, {
            "name": "Corpo da ulna",
            "image": "/images/"
          }, {
            "name": "Face anterior",
            "image": "/images/"
          }, {
            "name": "Face posterior",
            "image": "/images/"
          }, {
            "name": "Face medial",
            "image": "/images/"
          }, {
            "name": "Margem interóssea",
            "image": "/images/"
          }, {
            "name": "Circunferência articular",
            "image": "/images/"
          }, {
            "name": "Cabeça da ulna",
            "image": "/images/"
          }, {
            "name": "Processo estilóide",
            "image": "/images/"
          }]
        }, {
          "name": "Rádio",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Cabeça do rádio",
            "image": "/images/"
          }, {
            "name": "Circunferência articular",
            "image": "/images/"
          }, {
            "name": "Fóvea articular",
            "image": "/images/"
          }, {
            "name": "Colo do rádio",
            "image": "/images/"
          }, {
            "name": "Tuberosidade do rádio",
            "image": "/images/"
          }, {
            "name": "Corpo do rádio",
            "image": "/images/"
          }, {
            "name": "Margem interóssea",
            "image": "/images/"
          }, {
            "name": "Margem anterior",
            "image": "/images/"
          }, {
            "name": "Margem posterior",
            "image": "/images/"
          }, {
            "name": "Face anterior",
            "image": "/images/"
          }, {
            "name": "Processo estilóide do rádio",
            "image": "/images/"
          }, {
            "name": "Incisura ulnar",
            "image": "/images/"
          }, {
            "name": "Face articular carpal",
            "image": "/images/"
          }, {
            "name": "Sulcos e cristas para os tendões extensores",
            "image": "/images/"
          }]
        }, {
          "name": "Ossos do Carpo - Proximais",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Escafóide (do grego scaphe = canoa e oidés = forma de)",
            "image": "/images/"
          }, {
            "name": "Semilunar (do latim semilunaris = meia lua)",
            "image": "/images/"
          }, {
            "name": "Piramidal (do latim pyramidalis = pirâmide)",
            "image": "/images/"
          }, {
            "name": "Pisiforme (do latim pisum = ervilha e formis = em forma de)",
            "image": "/images/"
          }]
        }, {
          "name": "Ossos do Carpo - Distais",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "Trapézio (do grego trapezion = pequena mesa quadrada)",
            "image": "/images/"
          }, {
            "name": "Trapezóide (diminutivo do termo anterior)",
            "image": "/images/"
          }, {
            "name": "Capitato (do latim capitatum = provido de cabeça)",
            "image": "/images/"
          }, {
            "name": "Hamato (do latim hamatus = em forma de gancho)",
            "image": "/images/"
          }]
        }, {
          "name": "Ossos Metacarpais",
          "views": false,
          "icon": "images/",
          "accidents": [{
            "name": "I Metarpo",
            "image": "/images/"
          }, {
            "name": "II Metarpo",
            "image": "/images/"
          }, {
            "name": "III Metarpo",
            "image": "/images/"
          }, {
            "name": "IV Metarpo",
            "image": "/images/"
          }, {
            "name": "V Metarpo",
            "image": "/images/"
          }]
        }, {
          "name": "Falanges Tarsais",
          "views": false,
          "icon": "images/",
          "accidents": []
        }]
      },
      {
        "name": "Sistema Articular",
        "icon": "fas fa-x-ray",
      },
      {
        "name": "Sistema Muscular",
        "icon": "fas fa-dumbbell",
      }
    ]
  },
  {
    "name": "Sistema Nervorso",
    "content": [{
      "name": "Cerebelo",
      "icon": "fas fa-x-ray",
    }, {
      "name": "Medula Espinhal",
      "icon": "fas fa-x-ray",
    }, {
      "name": "Diencéfalo e III Ventrículo",
      "icon": "fas fa-dumbbell",
    }, {
      "name": "Tronco Encefálico",
      "icon": "fas fa-dumbbell",
    }, {
      "name": "Telencéfalo",
      "icon": "fas fa-dumbbell",
    }]
  }
];
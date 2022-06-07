---
title: Network Motifs as Codes
author: Bodong Chen
date: '2022-06-07'
slug: []
categories:
  - blog
tags:
  - network analysis
  - CSCL
  - learning analytics
---

I've been working on a framework of applying socio-semantic network analysis to discourse data. 

Socio-semantic networks are *two-mode*, *dual-layer* networks that are made of actors (e.g., learners), semantic entities (e.g., words), and their relations. Socio-semantic network analysis brings together the study of relations among actors (human networks), relations among semantic elements (semantic networks), and relations among these two orders of networks (Basov et al., 2020). Such a dual-layer network analysis approach is not only useful for examining the duality of socio-semantic relations, it also applies to other settings such as socio-ecological analysis that's interested in the interactions between social structures and ecological resources (Bodin & Tengö, 2012).

<img src="https://www.researchgate.net/profile/Xiufen-Zou-2/publication/319361420/figure/fig1/AS:538672060735499@1505440835928/Schematic-representation-of-a-multilayer-network-with-two-layers-where-each-layer-has_W640.jpg" width = "40%" />


A key distinction of such a dual-layer approach -- in comparison with traditional social networks and semantic networks -- is its attempts to maintain the dualities within these two-mode networks instead of projecting them into separate one-mode networks. 

My desire to introduce socio-semantic network analysis to the collaborate learning context grew out of a long journey of searching for ways to examine learning discourse computationally without reducing discourse data too dramatically to distal representations. Computational analysis is important here because there is a hope to close the feedback loop when useful insights are uncovered. Reduction of complexity could be tolerated as long as it's done carefully (with theoretical and analytical rigor) and still allows meaningful action taking. 

Mining *network motifs* from socio-semantic networks seems to offer a versatile solution. Generally speaking, *network motifs* are basic building blocks of networks. They are "sub-graphs that repeat themselves in a specific network," according to [Wikipedia](https://en.wikipedia.org/wiki/Network_motif#:~:text=Network%20motifs%20are%20sub%2Dgraphs,particular%20functions%20are%20achieved%20efficiently.). Network scientists like Ron Milo and Albert-László Barabási have applied motif analysis in various domains including the World Wide Web, neuroscience, transportation networks, etc. When comparing ground vs. air transportation networks, you'd see more motifs reflecting grids in the ground transportation but more motifs reflecting hubs in air transportation networks. The presence of certain motifs may dictate how a network behaves. 

My talk at the *2022 ISLS Annual Meeting* proposes a framework to situate various socio-semantic network motifs in the collaborative discourse context. The ISLS talk is focused in knowledge-building discourse, aiming to capture nuanced socio-semantic patterns in learner discourse. By identifying network motifs that are either under- or over-represented in discourse data, they become signatures that characterize the discourse and offer points of departure for specific pedagogical moves. See the slides below for details.

<script async class="speakerdeck-embed" data-id="d7758bd4a19b448db4d214b8b73dfade" data-ratio="1.77725118483412" src="//speakerdeck.com/assets/embed.js"></script>

I had a nice follow-up conversation with a teacher colleague right after the session. He spends hours each week in his knowledge building class to help students make connections with each other and with ideas. He was especially curious about ways the motif analysis could assist him in these efforts. I'm looking forward to launching co-design partnerships to develop tools based on the motif analysis.

As this work progresses, I also wonder: *What would it take for socio-semantic network motifs be treated as codes in discourse analysis?* As someone who follows intriguing work coming out of [the Quantitative Ethnography community](https://www.quantitativeethnography.org/), I am curious how the motif analysis could enrich the available set of computational tools for discourse analysis. 

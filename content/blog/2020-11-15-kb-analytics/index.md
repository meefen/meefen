---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Where is Knowledge Building Analytics Headed?"
subtitle: ""
summary: ""
authors: ["Bodong Chen"]
tags: []
categories: []
date: 2020-11-15T10:28:39-06:00
lastmod: 2020-11-15T10:28:39-06:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: "Left"
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

This year's **Knowledge Building Summer Institute (KBSI)** is going to be special. First, it's held near the end of November, for the first time in summer for folks from the Southern Hemisphere. Second, the conference is going to be virtual, following a hybrid synchronous--asynchronous model. Much work will be done in Knowledge Forum asynchronously before interactive sessions in Zoom on the conference days. Last but not least, this year's conference will feature a global KB design experiment, *Saving the Planet, Saving Lives*, led by colleagues from Ontario and Singpapore. See [conference program here](https://ikit.org/summerinstitute2020/index.php/program/) for details.

For me, it's especially exciting to see a broadening interest in Knowledge Building (KB) Analytics in this intimate community. I still believe KB has a special place in learning analytics because its views on learning and education (see [Chen & Zhang, 2016](https://learning-analytics.info/index.php/JLA/article/view/4552)). KB's attempt to refashion education into an effort aligned with knowledge societies can also help learning analytics find more common grounds with CSCW, HCI, knowledge analytics, etc. 

**This year, there are one theme and two sessions dedicated to Knowledge Building Analytics at KBSI. Here are my quick takeaways, before the conference, from reading papers in these sessions.** 

## Graph/network based approaches

A number of contributions have adopted a graph/network approach. 

- **Xue, Zhang, & Xu (Nanjing Normal Unversity)** propose to construct **dynamic knowledge graphs (DKG)** to assess and foster conceptual change. The DKG approach integrates a wide range of techniques from natural language processing (POS tagging, topic modeling, Word2vec), association rule mining, and graph visualization. With the constructed graph, centrality indices can be used to surface key concepts, which collectively provide indicators of a community's current conceptual understanding. The DKG approach is an important technical advancement for KB analytics. It builds on a long-term interest in using network/graph approaches (e.g., KBDeX) in the KB community. It expands our KB analytics work by combining nascent graph database technologies, data mining techniques, and front-end web interfaces to deliver a complete analytics package. 
- Grounded in the "Good moves in knowledge-creating dialogue" framework by [Bereiter and Scardamalia (2016)](http://www.ckbg.org/qwerty/index.php/qwerty/article/view/242), **Feng, van Aalst, & Chan (University of Hong Kong)** propose to use the **Idea-Friend Maps** to help students consider new ideas, meta-dialogue, high-level ideas, etc. The Idea-Friend Maps use the word networks extracted from KBDeX and enrich them with important information such as knowledge problems. A major contribution made by the Idea-Friend Maps project is it meaningfully connects sophisticated conceptual ideas (i.e. the Good Moves framework) and analytic tools (i.e., KBDeX) to student engagement. The Maps and their accompanying questions are actionable for students.
- **Hussein & Chen (Univeresity of Minnesota)** propose to use network-based text analysis to bridge gaps in knowledge-building discourse, by using network indices and network phenomena such as structural holes. This work is situated in the goal of connecting discourse across spaces but is applicable to meta-discourse.

A cross-cutting theme among three contributions (Hussein & Chen; Feng, van Aalst, & Chan; Xue, Zhang, & Xu) is the use of network/graph approaches in KB Analytics. Feng et al. use socio-semantic networks created by KBDeX; Hussein & Chen use text networks that rely on network analysis techniques for topic modeling and structural analysis; Xue et al. integrate a range of data science methods in a graph analysis scheme that leads to the identification of dominant terms. We collectively have an interesting mix of ideas about how to use graphs/networks in KB analytics. Graph/network analysis is a promising direction for our community. 

## Student-facing analytics

Besides Feng, van Aalst, & Chan's Idea-Friend Maps described above, **Ma, Akyea, & Martin (University of Toronto)** have done some really interesting work engaging 8- to 11-year-olds to review and critique current analytic tools in Knowledge Forum. "[Students] demonstrated sophisticated interpretations of their online activities with the Knowledge Forum analytic tools. Not only were they honest and open about receiving feedback through novel forms of data visualization, they were also aware of the potential limitations of these tools and offered thoughtful and insightful feedback for our engineers."

In Xue et al.'s paper, they also mention that pilot studies of the DKG with teachers and students are also underway. 

We do not necessarily need more advanced analytical techniques. Work that scaffolds student sense-making and use of analytic information is equally (or even more) important. Trying to put more analytic tools -- good ones -- in the hands of students is a promising idea that's aligned with Knowledge Building. 

## Bridge technical work on analytics and KB concepts/principles

**Tan & Teo (National Institute of Education, Singapore)** take a much-needed meta perspective. Based on a literature review of KB analytics, they propose two sets of guiding questions that are instrumental for future KB analytics design and development. These questions achieve two important goals: (1) to ground analytics design and use in KB ideals (e.g., students take high-level responsibility), and (2) to suggest areas to consider as we put KB analytics tools into practice. These questions are applicable to the other contributions mentioned above. Tan and Teo remind us that we should not forget what these KB analytics are developed for. They also distinguish augmented intelligence from artificial intelligence (AI) and argue the KB community may want to side with the augmented intelligence camp, which is also called intelligence augmentation (IA) by scholars (Engelbart, 1962). 

It is a promising direction for the community to consolidate a set of such guiding questions for KB analytics and continue to refine them to bring technical work and KB concepts into alignment. 

## Thoughts on future work

**Analyze KB discourse as a multidimensional phenomenon.** It is apparent that we as a community has quite impressive expertise in applying data science methods to KB discourse data (there is exciting work not covered here such as [Dr. Gaoxia Zhu's dissertation work on emotional dynamics](http://gaoxiazhu.weebly.com/)).  We now need to push for integrated views of KB discourse by bringing various analytical perspectives together -- social, semantic, temporal, emotional, spatial, etc. 

**Involve students and teachers to co-design analytics tools.** Multiple papers in these sessions have highlighted the need to look at human factors as we design and deploy KB analytics. This recognition is aligned with [human-centered design sought by the learning analytics community](https://learning-analytics.info/index.php/JLA/article/view/6627) in recent years. Feng et al. show us important work that needs to take place to move from analytical results to actionable insights. What's useful is not determined by the researchers or analytical methods; instead, it's determined by the students and teachers who sense-make and problem-solve with the provided information. 

**Articulate conceptual groundings of measures and analytical decisions.** As mentioned above, the graph/network approach is a promising direction. However, we still need to do a better job at grounding network measures/indices in KB concepts or phenomena. What does betweenness centrality in the word network really mean? Why only nouns are retained in a knowledge graph? Why a certain threshold is chosen when trimming a network? We need to be mindful of these questions and analytical decisions in future work. As a community, we should consider mapping out measures we have, connect them with KB constructs, and examine conceptual congruence and incongruence. Actually, we may need to do a network analysis of our own KB analytics work to identify gaps and future directions. 

***

That's all for now. I will provide an updated view after the conference. 
---
title: Let's complicate the idea of infrastructure in conversations about GenAI
author: Bodong Chen
date: '2024-05-15'
slug: []
categories:
  - musing
tags:
  - AI
  - infrastructure
---

## First, a blog post


> ### Rethinking AI Infrastructure: Beyond the Surface-Level Conversations
> 
> The current excitement around generative AI has sparked a wave of discussions about its potential to transform various aspects of our lives. Amidst the hype, there's a growing tendency to refer to AI as "infrastructure." While this comparison might seem fitting, it oversimplifies the complexity of AI systems and, more importantly, obscures the critical questions surrounding control, benefit, and impact. As we hurtle towards an AI-driven future, it's essential to pause and reexamine our assumptions about AI infrastructure.
> 
> **The phrase "AI infrastructure" often conjures up images of a neutral, technical backbone that underpins AI applications.** However, this depiction glosses over the social and political dimensions of AI systems. In reality, AI infrastructure is shaped by human decisions, biases, and values that can either perpetuate or challenge existing power structures.
> 
> Research has shown that the development and deployment of AI systems are often influenced by a small group of stakeholders, primarily tech companies and governments. These entities have significant control over the infrastructure, determining what data is collected, how it's processed, and who has access to the resulting insights. This concentration of power raises important questions about accountability, transparency, and the distribution of benefits.
> 
> For instance, when AI-generated content is used to support learning, who benefits from this process? Is it the students, the educators, or the companies providing the AI tools? As explored in my previous research (Chen et al., 2023), the integration of AI in education can have both empowering and constraining effects, depending on the context and stakeholders involved. Similarly, when AI is used to augment the workforce, whose interests are being served: those of the employees, the employers, or the technology providers?
>
> Moreover, the development of AI infrastructure is often driven by market forces, which prioritize efficiency and profit over social welfare and equity. This can lead to the exacerbation of existing inequalities, as those with greater access to resources and influence can further entrench their advantages.
>
> It's crucial to recognize that AI infrastructure is not a neutral, technical substrate; it's a socio-political construct that reflects and shapes the world around us. By acknowledging this, we can begin to address the nuances of AI infrastructure and work towards a more inclusive, equitable, and transparent AI ecosystem.
>
> To better understand the complexities of AI infrastructure, we can draw on the concept of *infrastructuring*, which involves creating functional infrastructures for activities in a particular context. This lens helps us recognize that AI infrastructure is not a static entity, but rather a dynamic, ongoing process that requires continuous negotiation and adaptation (Chen, 2024).
> 
> When we apply the IMPROV framework to the development and deployment of AI systems, we can identify six interconnected areas of infrastructuring: surfacing existing infrastructures, facilitating coherence-making negotiation activities, engaging practitioners in collaborative design, continuously evaluating infrastructuring activities, sustaining innovations, and promoting systemic change (Chen, 2024).
> 
> In the context of AI infrastructure, this means that we need to surface the installed base of educational innovations, take into account the relationships between different stakeholders and their interests, and facilitate negotiations between them to create a more equitable and sustainable AI ecosystem.
> 
> For instance, when integrating AI-generated content into educational settings, we need to consider the relationships between teachers, students, administrators, and tech companies. We must surface the installed base of educational innovations, including curriculum standards, instructional materials, and school schedules, to understand how AI applications will interact with and impact these components.
> 
> **Moreover, we need to engage practitioners in collaborative design, encouraging teachers, students, and other stakeholders to contribute to the development and deployment of AI systems. This can help ensure that AI infrastructure is more inclusive, adaptive, and responsive to diverse needs.**
> 
> By adopting a more nuanced understanding of AI infrastructure, we can move beyond the simplistic notion of AI as a neutral, technical substrate. Instead, we can work towards creating AI systems that are more participatory, inclusive, and socially responsible.
> 
> Sources:
>
> - Chen, B., Zhu, X., & Díaz del Castillo H., F. (2023). Integrating generative AI in knowledge building. *Computers and Education: Artificial Intelligence, 5*, 100184. https://doi.org/10.1016/j.caeai.2023.100184
> - Chen, B. (2024). A framework for infrastructuring sustainable innovations in education. *Journal of the Learning Sciences*, 1–30. https://doi.org/10.1080/10508406.2024.2320159

## Full story of the post

This blog post could end here. But what if I told you content of the post was mostly generated by a Large Language Model -- Llama3-70b-8192 to be exact -- running on Groq, via an interface named LibreChat running on my local laptop? 

Of course, the idea of writing this post came from me as I was reviewing recent OpenAI demos of GPT-4o and Google demos of Gemini models. 

I wanted to complicate the idea of 'infrastructure' in people's words that depict AI as a substrate that's naturally good and empowering for everyone. With this idea in mind, I fed Llama3-70b with two of my recent papers and asked the following prompt:

> Please review these two papers I've written before. Now, I want to write a blog post that complicates the idea of infrastructure in the public's current conversations about generative AI. The issue I take is many people talk about AI as infrastructure but lacks in nuance in thinking about who has control over AI infrastructure and whose benefits are served or undermined when society continues to build AI applications. 
> 
> Can you draft a 1000 word blog post about this critique? Please try to read these two papers and draw on ideas in them.

I was not very happy with the first draft because it only referenced my 2023 paper. I then asked Llama3 again, urging it to read my 2024 paper:

> Now take what you just drafted, and carefully consider ideas in this attached paper. Please then rewrite the blog post by incorporating ideas in the new paper attached.

The post above was pieced together by me with outputs from two different trials. Is the post any good? You can make your own judgment. But there are a few points that got me to think more:

- Research has shown that the development and deployment of AI systems are often influenced by a small group of stakeholders, primarily tech companies and governments. These entities have significant control over the infrastructure, determining what data is collected, how it’s processed, and who has access to the resulting insights. 
- Moreover, the development of AI infrastructure is often driven by market forces, which prioritize efficiency and profit over social welfare and equity. This can lead to the exacerbation of existing inequalities, as those with greater access to resources and influence can further entrench their advantages.
- To better understand the complexities of AI infrastructure, we can draw on the concept of infrastructuring, which involves creating functional infrastructures for activities in a particular context. This lens helps us recognize that AI infrastructure is not a static entity, but rather a dynamic, ongoing process that requires continuous negotiation and adaptation (Chen, 2024).

I had these ideas implicit in mind but Llama3 did a good job articulating them and making these connections quite eloquently, in a way that's aligned with my thinking and prior writings. 

The less impressive part is the suggestions of using the IMPROV framework, such as "to engage practitioners in collaborative design, encouraging teachers, students, and other stakeholders to contribute to the development and deployment of AI systems", sound a bit cliche. 

## My thoughts

This blog post has two purposes: 

1. I wanted to make some points to complicate current conversations about AI as infrastructure. It is indeed the case in many situations, across social sectors. But we should extremely cautious about rhetoric that says AI will benefit all, especially when people like Sam Altman says we should think about "universal basic compute" (everyone gets a slice of OpenAI compute) rather than "Universal Basic Income." These attempts of tackling AI under public infrastructure and ask everyone to accept it is sneaky, if not fundamentally evil. 

2. By demonstrating the possibility of having an open language model (aka. Llama3) running on an open-source chat interface (LibreChat) on my local computer, I wanted to highlight the viability and importance of putting such tools in the hands of people. Of course, we need to make sure people are trained to use such tools ethically. Meanwhile, we need to inject more human ingenuity in current AI interaction designs. One important way to move in this direction is to equip more people with knowledge, mindsets, and capacity to be at the frontier of design AI tools. These people might be looked (down) upon by Big Tech as "end-users." My argument is they know better about their craft and would come up with much better things than what we see so far. 

What's exciting is that colleagues and I have been running a Design Jam focused on designing alternative ways of integrating AI in knowledge building. As educators, we have necessary expertise to develop AI applications that advances refreshing visions of learning instead of lazily replicating existing ones (that are often problematic). We need to do more infrastructuring work in the AI space, as Llama3 wrote, by "engag[ing] practitioners in collaborative design, encouraging teachers, students, and other stakeholders to contribute to the development and deployment of AI systems."

Good job, AI...

![](featured.png)

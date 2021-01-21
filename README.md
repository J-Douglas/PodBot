#  PodBot - Hack the North 2020

## Overview

For our Hack the North 2020 project, we were first inspired to make a chatbot which could have realistic conversations. Among the many applications of this technology, we all recognized the usefulness of a tool that could extract opinions and answer questions about topics discussed on podcasts. So, we created Pod Bot, a text-generative chatbot which is trained on the transcripts of podcasts and offers realistic conversation on a range of interesting topics.

## Installation/Dependencies

First, you must clone the respository with the following:

`git clone https://github.com/J-Douglas/PodBot.git`

The size of our model means that you must have Git Large File Storage installed. You can get Git LFS with Homebrew or Macports by using the following:

`brew install git-lfs`

## Model

To create our bot, we used transfer learning on the pre-trained Blenderbot 90M model. The Blender chatbot was created by Facebook and was created to replicate realistic conversation. There are 3 different variants of Blenderbots: 90M, 2.7B, and 9.4B. We chose the smallest variant due to our resource and time limitations. The Blender chatbots are pre-trained on the pushshift.io Reddit dataset.

## Transfer Learning Data

We scraped 150 transcripts from the Tim Ferris Show to create a custom dataset which we used for transfer learning on Blenderbot. One reason we chose the smallest Blenderbot variant was because we wanted the transcripts to affect the largest relative influence on the model's parameters. As well, time restriction and resources limitation made the smallest variant the most logical option.

# Deployment

Navigate to the cloned repository and type the following into the terminal:

'docker-compose up'

The chatbot will deployed locally at a specified address you can find in the terminal messages.

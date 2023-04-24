/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  documentationSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },

    {
      type: 'category',
      label: 'Getting Started',
      link: {type: 'doc', id: 'getting-started/index'},
      items: [ {
                  type: 'category',
                  label: 'IDE Support',
                  link: {type: 'doc', id: 'getting-started/ide-support/index'},
                  items: ['getting-started/ide-support/jetbrains-rider-setup'],
                },
                {
                  type: 'category',
                  label: 'Programming with Avalonia',
                  link: {type: 'doc', id: 'getting-started/programming-with-avalonia/index'},
                  items: ['getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm', 
                          'getting-started/programming-with-avalonia/controls-and-layouts',
                          'getting-started/programming-with-avalonia/data-binding',
                          'getting-started/programming-with-avalonia/graphics-and-animations'],
                },              
              'getting-started/windows',
              'getting-started/usercontrols',
              'getting-started/assets',
              'getting-started/developer-tools',
              'getting-started/logging-errors-and-warnings',
              'getting-started/UnhandledExceptions',
              'getting-started/application-lifetimes'],
    },
    {
      type: 'category',
      label: 'Data Binding',
      link: {type: 'doc', id: 'data-binding/index'},
      items: ['data-binding/the-datacontext',
              'data-binding/change-notifications',
              'data-binding/bindings',
              'data-binding/binding-classes'],
    },
    {
      type: 'category',
      label: 'Animations',
      link: {type: 'doc', id: 'animations/index'},
      items: ['animations/keyframe-animations',
              'animations/transitions',
              'animations/pageTransitions'
              ],
    },
  ],
  apiSidebar: [
    {
      type: 'category',
      label: 'Avalonia.Animations',
      link: {type: 'doc', id: 'api/Avalonia-Animation/Animators'},
      items: [
              ],
    },
  ],
  guideSidebar: [
    {
      type: 'category',
      label: 'Basics',
      items: ['guides/basics/introduction-to-xaml',
              'guides/basics/code-behind',
              'guides/basics/mvvm',
              'guides/basics/accessing-the-ui-thread',
              ],
    },
    {
      type: 'category',
      label: 'Deep Dives',
      items: ['guides/deep-dives/running-on-raspbian-lite-via-drm',
              'guides/deep-dives/running-your-app-on-a-raspberry-pi'           
              ],
    },    
  ],  
   
};

module.exports = sidebars;

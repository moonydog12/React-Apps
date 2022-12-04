import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 0,
      label: 'Can I use React.js on a Project?',
      content: 'You can use React on any project you want.',
    },

    {
      id: 1,
      label: 'Can I use JavaScript on a Project?',
      content: 'You can use JavaScript on any project you want.',
    },

    {
      id: 2,
      label: 'Can I use Vue.js on a Project?',
      content: 'You can use Vue on any project you want.',
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;

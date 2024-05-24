export const addCopyButtons = (_class) => {
  const codeBlocks = document.querySelectorAll(_class);

  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.className='copy-button';
    button.innerText='Copy';
    block.parentNode.style.position = 'relative';
    block.parentNode.appendChild(button);

    button.addEventListener('click', async () => {
      const code = block.innerText;
      try {
        await navigator.clipboard.writeText(code);
        button.innerText = 'Copied';
      } catch (error) {
        button.innerText = 'Failed';
      }

      setTimeout(() => button.innerText = 'Copy', 2000);
    })
  });
};

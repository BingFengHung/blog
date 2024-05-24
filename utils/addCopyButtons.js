export const addCopyButtons = (_class) => {
  const codeBlocks = document.querySelectorAll(_class);

  codeBlocks.forEach(block => {
    const innerDiv = block.querySelector('div');
    // 檢查內部的 div 是否包含 'plaintext' 類
    if (innerDiv && innerDiv.classList.contains('plaintext')) {
      // 如果包含 'plaintext' 類，不添加複製按鈕
      return;
    }
    const button = document.createElement('button');
    button.className='copy-button';
    button.innerText='Copy';
    block.parentNode.style.position = 'relative';
    block.parentNode.appendChild(button);

    button.addEventListener('click', async () => {
      const code = block.innerText;
      try {
        await navigator.clipboard.writeText(code);
        button.innerText = 'Copied!';
        button.classList.add('copied')
      } catch (error) {
        button.innerText = 'Failed';
      }

      setTimeout(() => { 
        button.innerText = 'Copy'
        button.classList.remove('copied')
      }, 2000);
    })
  });
};

export const useLang = () => useState('lang', () => {
    // Utilize a função ref para criar uma variável reativa com o valor inicial 'portuguese'
    const lang = ref('portuguese');

    // Retorne a variável reativa lang
    return lang;
});
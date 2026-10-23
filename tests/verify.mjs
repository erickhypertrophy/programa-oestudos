import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { buildSingleFileHtml } from '../scripts/build-singlefile.mjs';
const root = new URL('../', import.meta.url);
const read = p => fs.readFileSync(new URL(p, root), 'utf8');
assert.equal(read('Por-Dentro-do-Computador.html'), buildSingleFileHtml(), 'Por-Dentro-do-Computador.html sincronizado com index.html, styles.css, data.js e app.js');
const elements = new Map();
function el(selector='') { if(!elements.has(selector)) elements.set(selector,{selector,innerHTML:'',textContent:'',value:'',style:{},dataset:{},disabled:false,files:[],classList:{add(){},remove(){},toggle(){},contains(){return false}},setAttribute(){},getAttribute(){return null},addEventListener(){},focus(){},click(){},select(){},remove(){},appendChild(){},removeChild(){}}); return elements.get(selector); }
const docListeners={}, winListeners={};
const document={querySelector:el,querySelectorAll:()=>[],addEventListener:(n,f)=>(docListeners[n]??=[]).push(f),createElement:(n)=>el(n),body:{appendChild(){},removeChild(){}},execCommand:()=>true};
const local={data:{},getItem(k){return this.data[k]??null},setItem(k,v){this.data[k]=String(v)},removeItem(k){delete this.data[k]}};
const location={hash:'',search:''};
const window={addEventListener:(n,f)=>(winListeners[n]??=[]).push(f),__PDC_TEST_MODE__:true};
const ctx={window,document,location,localStorage:local,console,URL,Blob,setTimeout,clearTimeout,Date,Math,JSON,Number,String,Array,Object,RegExp,Error,Promise,confirm:()=>true,prompt:()=>null,navigator:{},Intl};
vm.createContext(ctx);
vm.runInContext(read('data.js'),ctx,{filename:'data.js'});
vm.runInContext(read('app.js'),ctx,{filename:'app.js'});
const api=window.__PDC_TEST_API__;
assert.ok(api,'test API activated only for this test');
assert.equal(window.COURSE.length,13,'13 fases');
assert.equal(window.COURSE.reduce((n,p)=>n+p.sections.length,0),39,'39 lições');
assert.ok(window.GLOSSARY.length>=40,'glossário amplo');
for(let p=0;p<13;p++){
  assert.equal(window.COURSE[p].sections.length,3,`fase ${p+1} tem 3 lições`);
  for(let trial=0;trial<250;trial++){
    const pool=api.buildQuestionPool(p);
    assert.ok(pool.length>=4,`fase ${p+1}: banco com pelo menos 4 questões`);
    for(const q of pool){
      assert.ok(q.q && q.explain,`questão tem enunciado e explicação na fase ${p+1}`);
      if(q.type==='mc'){
        assert.ok(q.options.length>=3,`questão objetiva tem ao menos 3 opções`);
        assert.equal(q.options.filter(o=>o.ok).length,1,`questão objetiva tem uma resposta correta (${p}, ${q.q})`);
        assert.ok(q.options.every(o=>o.why),`feedback para cada alternativa da fase ${p+1}`);
      } else {
        assert.ok(q.type==='input');assert.ok(q.answers.length>0);assert.ok(q.answers.every(a=>typeof a==='string'));
      }
    }
    const quiz=api.makeQuiz(p);
    assert.equal(quiz.length,4,`avaliação fase ${p+1} tem 4 itens`);
    const expectedInputs=api.buildQuestionPool(p).some(q=>q.type==='input')?1:0;
    assert.equal(quiz.filter(q=>q.type==='input').length,expectedInputs,`composição de tipos coerente na fase ${p+1}`);
    assert.equal(quiz.filter(q=>q.type==='mc').length,4-expectedInputs,`quantidade de questões objetivas na fase ${p+1}`);
  }
}
assert.equal(api.bin(13),'1101','decimal→binário');
assert.equal(api.bin(13,8),'00001101','binário com largura fixa');
api.resetCPU();for(let i=0;i<5;i++)api.cpuStep();const cpu=api.getCPUState();assert.equal(cpu.a,6,'programa didático termina com A=6');assert.equal(cpu.memory[0],8,'STORE grava 8 em memória[0]');assert.equal(cpu.halted,true,'HALT encerra a máquina');
// Teste de renderização por DOM simulado: útil para garantir que o render não falhe,
// mas NÃO substitui o teste visual em um navegador real.
for(const f of winListeners.hashchange||[])f();assert.match(el('#main').innerHTML,/Entenda o que acontece/,'tela inicial renderizada no DOM simulado');
location.hash='#curso';for(const f of winListeners.hashchange||[])f();assert.match(el('#main').innerHTML,/Pensar como um computador/,'mapa de fases renderizado');
console.log('PASS: 13 fases, 39 lições, glossário, 3.250 ciclos de geração de banco de questões, validade de opções/feedback, mistura dos quizzes, conversão binária, mini-CPU e renderizações básicas simuladas.');
console.log('LIMITAÇÃO: teste de DOM simulado não comprova layout real, interação de navegador nem compatibilidade do Worker em file://.');

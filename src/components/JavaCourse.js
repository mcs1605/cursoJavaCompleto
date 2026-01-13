import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Code, Rocket, Star, Award, Book, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

const JavaCourse = () => {
    const [completedProjects, setCompletedProjects] = useState(() => {
        const saved = localStorage.getItem("javaCourseProgress");
        return saved ? new Set(JSON.parse(saved)) : new Set();
    });
  
    const [expandedModule, setExpandedModule] = useState(0);
    const [expandedProject, setExpandedProject] = useState(null);

    useEffect(() => {
        localStorage.setItem(
            "javaCourseProgress",
            JSON.stringify(Array.from(completedProjects))
        );
    }, [completedProjects]);

    const resetProgress = () => {
    if (window.confirm("Tem certeza que deseja resetar todo o progresso?")) {
        setCompletedProjects(new Set());
        localStorage.removeItem("javaCourseProgress");
    }
    };

  const projects = [
    {
      id: 1,
      level: "Iniciante",
      levelColor: "bg-green-500",
      name: "Hello World & Variáveis",
      description: "Seu primeiro programa Java. Aprenda sobre tipos de dados, variáveis e operações básicas.",
      concepts: ["System.out.println()", "int, double, String", "Operadores aritméticos"],
      projectTask: "Criar um programa que calcula sua idade em dias",
      theory: "Java é uma linguagem compilada e orientada a objetos. Todo programa Java precisa de uma classe com um método main. Os tipos primitivos incluem int (números inteiros), double (números decimais), boolean (verdadeiro/falso) e char (caractere único). String é uma classe usada para textos.",
      codeExample: `public class MeuPrimeiroPrograma {
    public static void main(String[] args) {
        // Declarando variáveis
        String nome = "João";
        int idade = 25;
        double altura = 1.75;
        
        // Mostrando dados
        System.out.println("Olá, " + nome + "!");
        System.out.println("Você tem " + idade + " anos");
        System.out.println("Sua altura é " + altura + "m");
        
        // Fazendo cálculos
        int idadeEmDias = idade * 365;
        System.out.println("Isso é " + idadeEmDias + " dias!");
    }
}`,
      steps: [
        "Crie um arquivo MeuPrimeiroPrograma.java",
        "Declare variáveis: String para texto, int para inteiros, double para decimais",
        "Use System.out.println() para mostrar dados no console",
        "Faça operações matemáticas com os operadores +, -, *, /",
        "Compile: javac MeuPrimeiroPrograma.java",
        "Execute: java MeuPrimeiroPrograma"
      ],
      challenge: "Adicione cálculo de idade em horas e minutos. Mostre também o ano de nascimento aproximado usando o ano atual."
    },
    {
      id: 2,
      level: "Iniciante",
      levelColor: "bg-green-500",
      name: "Calculadora Simples",
      description: "Crie uma calculadora com as 4 operações básicas usando Scanner para entrada de dados.",
      concepts: ["Scanner", "Condicionais (if/else)", "Switch case"],
      projectTask: "Menu interativo com operações matemáticas",
      theory: "Scanner é uma classe que permite ler entrada do usuário. Estruturas condicionais (if/else e switch) permitem que o programa tome decisões baseadas em condições. O switch é ideal quando temos múltiplas opções fixas.",
      codeExample: `import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("=== CALCULADORA ===");
        System.out.print("Primeiro número: ");
        double num1 = scanner.nextDouble();
        
        System.out.print("Segundo número: ");
        double num2 = scanner.nextDouble();
        
        System.out.println("\\n1-Soma 2-Subtração 3-Multiplicação 4-Divisão");
        int op = scanner.nextInt();
        
        switch(op) {
            case 1:
                System.out.println("Resultado: " + (num1 + num2));
                break;
            case 2:
                System.out.println("Resultado: " + (num1 - num2));
                break;
            case 3:
                System.out.println("Resultado: " + (num1 * num2));
                break;
            case 4:
                if(num2 != 0) {
                    System.out.println("Resultado: " + (num1 / num2));
                } else {
                    System.out.println("Erro: divisão por zero!");
                }
                break;
            default:
                System.out.println("Opção inválida!");
        }
        scanner.close();
    }
}`,
      steps: [
        "Importe java.util.Scanner no topo do arquivo",
        "Crie um Scanner: Scanner sc = new Scanner(System.in)",
        "Use nextDouble() para ler números decimais",
        "Use nextInt() para ler inteiros",
        "Implemente switch/case para cada operação",
        "Trate divisão por zero com if",
        "Sempre feche o Scanner com close()"
      ],
      challenge: "Adicione potenciação (Math.pow) e raiz quadrada (Math.sqrt). Implemente um loop para fazer várias operações sem fechar o programa."
    },
    {
      id: 3,
      level: "Iniciante",
      levelColor: "bg-green-500",
      name: "Jogo de Adivinhação",
      description: "O computador escolhe um número e você tenta adivinhar. Use loops e condicionais.",
      concepts: ["Random", "While loop", "Comparações"],
      projectTask: "Adicione dicas (maior/menor) e contador de tentativas",
      theory: "A classe Random gera números aleatórios. O loop while executa código enquanto uma condição for verdadeira. Operadores de comparação incluem > (maior), < (menor), == (igual), != (diferente).",
      codeExample: `import java.util.Random;
import java.util.Scanner;

public class JogoAdivinhacao {
    public static void main(String[] args) {
        Random random = new Random();
        Scanner sc = new Scanner(System.in);
        
        int numeroSecreto = random.nextInt(100) + 1;
        int tentativas = 0;
        int palpite = 0;
        
        System.out.println("Adivinhe o número entre 1 e 100!");
        
        while(palpite != numeroSecreto) {
            System.out.print("Seu palpite: ");
            palpite = sc.nextInt();
            tentativas++;
            
            if(palpite < numeroSecreto) {
                System.out.println("📈 Muito baixo! Tente MAIOR.");
            } else if(palpite > numeroSecreto) {
                System.out.println("📉 Muito alto! Tente MENOR.");
            } else {
                System.out.println("🎉 ACERTOU em " + tentativas + " tentativas!");
            }
        }
        sc.close();
    }
}`,
      steps: [
        "Importe Random e Scanner",
        "Gere número aleatório: random.nextInt(100) + 1 (de 1 a 100)",
        "Inicialize contador de tentativas em 0",
        "Loop while até acertar",
        "Leia palpite do usuário",
        "Compare com <, > e ==",
        "Incremente tentativas com ++"
      ],
      challenge: "Adicione níveis (fácil: 1-50, difícil: 1-500). Implemente sistema de ranking baseado em tentativas (expert <5, bom <10, etc)."
    },
    {
      id: 4,
      level: "Iniciante",
      levelColor: "bg-green-500",
      name: "Conversor de Temperaturas",
      description: "Converta entre Celsius, Fahrenheit e Kelvin. Pratique funções e formatação.",
      concepts: ["Métodos", "Parâmetros", "Return", "printf"],
      projectTask: "Menu com múltiplas conversões",
      theory: "Métodos são blocos de código reutilizáveis. Parâmetros são valores passados para o método. 'return' devolve um valor. printf permite formatar a saída (%.2f mostra 2 casas decimais).",
      codeExample: `import java.util.Scanner;

public class ConversorTemp {
    
    public static double celsiusParaFahrenheit(double c) {
        return (c * 9/5) + 32;
    }
    
    public static double celsiusParaKelvin(double c) {
        return c + 273.15;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("1-C→F  2-C→K  3-F→C");
        int op = sc.nextInt();
        
        System.out.print("Temperatura: ");
        double temp = sc.nextDouble();
        
        double resultado;
        switch(op) {
            case 1:
                resultado = celsiusParaFahrenheit(temp);
                System.out.printf("%.2f°C = %.2f°F\\n", temp, resultado);
                break;
            case 2:
                resultado = celsiusParaKelvin(temp);
                System.out.printf("%.2f°C = %.2fK\\n", temp, resultado);
                break;
        }
        sc.close();
    }
}`,
      steps: [
        "Crie métodos com 'public static tipo nome(parametros)'",
        "Use 'return' para devolver o resultado",
        "Chame o método passando valores: metodo(valor)",
        "Fórmulas: F=(C*9/5)+32, K=C+273.15, C=(F-32)*5/9",
        "Use printf com %.2f para 2 casas decimais",
        "\\n adiciona quebra de linha"
      ],
      challenge: "Implemente todas as 6 conversões (C↔F, C↔K, F↔K). Valide entradas para evitar temperaturas impossíveis (ex: abaixo do zero absoluto)."
    },
    {
      id: 5,
      level: "Intermediário",
      levelColor: "bg-blue-500",
      name: "Sistema de Cadastro de Alunos",
      description: "Gerencie uma lista de alunos com notas. Introdução a arrays e estruturas de dados.",
      concepts: ["Arrays", "ArrayList", "Loops for/foreach", "Classes básicas"],
      projectTask: "CRUD completo (criar, listar, atualizar, deletar)",
      theory: "Arrays têm tamanho fixo. ArrayList é dinâmico e pode crescer. For tradicional usa índice, for-each itera diretamente pelos elementos. Métodos importantes: add(), get(), remove(), size().",
      codeExample: `import java.util.ArrayList;
import java.util.Scanner;

public class SistemaAlunos {
    public static void main(String[] args) {
        ArrayList<String> nomes = new ArrayList<>();
        ArrayList<Double> notas = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
        
        int op;
        do {
            System.out.println("\\n1-Adicionar 2-Listar 3-Média 4-Remover 0-Sair");
            op = sc.nextInt();
            sc.nextLine();
            
            switch(op) {
                case 1:
                    System.out.print("Nome: ");
                    nomes.add(sc.nextLine());
                    System.out.print("Nota: ");
                    notas.add(sc.nextDouble());
                    break;
                    
                case 2:
                    for(int i = 0; i < nomes.size(); i++) {
                        System.out.printf("%d - %s: %.1f\\n", 
                            i+1, nomes.get(i), notas.get(i));
                    }
                    break;
                    
                case 3:
                    double soma = 0;
                    for(double nota : notas) soma += nota;
                    System.out.printf("Média: %.2f\\n", soma/notas.size());
                    break;
                    
                case 4:
                    System.out.print("Número: ");
                    int idx = sc.nextInt() - 1;
                    nomes.remove(idx);
                    notas.remove(idx);
                    break;
            }
        } while(op != 0);
    }
}`,
      steps: [
        "Crie ArrayLists: ArrayList<Tipo> nome = new ArrayList<>()",
        "add(elemento) adiciona no final",
        "get(indice) acessa elemento",
        "remove(indice) deleta",
        "size() retorna quantidade",
        "For tradicional: for(int i=0; i<lista.size(); i++)",
        "For-each: for(Tipo var : lista)"
      ],
      challenge: "Adicione busca por nome, edição de notas, ordenação alfabética e mostre aprovados/reprovados (nota >= 7)."
    },
    {
      id: 6,
      level: "Intermediário",
      levelColor: "bg-blue-500",
      name: "Biblioteca Pessoal",
      description: "Sistema OOP completo para gerenciar livros. Aprenda os pilares da programação orientada a objetos.",
      concepts: ["Classes", "Objetos", "Encapsulamento", "Getters/Setters"],
      projectTask: "Classe Livro com atributos e métodos",
      theory: "Classes são moldes para criar objetos. Atributos devem ser private (encapsulamento). Getters/Setters acessam atributos de forma controlada. Constructor inicializa objetos. 'this' se refere ao objeto atual.",
      codeExample: `class Livro {
    private String titulo;
    private String autor;
    private boolean emprestado;
    
    public Livro(String titulo, String autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.emprestado = false;
    }
    
    public void emprestar() {
        if(!emprestado) {
            emprestado = true;
            System.out.println("Emprestado!");
        } else {
            System.out.println("Já emprestado!");
        }
    }
    
    public void devolver() {
        emprestado = false;
    }
    
    public void mostrar() {
        System.out.println(titulo + " - " + autor);
        System.out.println("Status: " + (emprestado ? "Emprestado" : "Disponível"));
    }
}

public class Biblioteca {
    public static void main(String[] args) {
        Livro livro1 = new Livro("1984", "Orwell");
        livro1.mostrar();
        livro1.emprestar();
        livro1.emprestar(); // Tenta novamente
    }
}`,
      steps: [
        "Crie classe em arquivo separado ou na mesma classe",
        "Declare atributos private",
        "Crie constructor: public NomeClasse(parametros)",
        "Use 'this.atributo = parametro' no constructor",
        "Implemente métodos públicos",
        "No main: Classe obj = new Classe(valores)",
        "Chame métodos: obj.metodo()"
      ],
      challenge: "Adicione páginas, ano, ISBN e categoria. Crie ArrayList de livros com busca por título/autor e filtro por disponibilidade."
    },
    {
        id: 7,
      level: "Intermediário",
      levelColor: "bg-blue-500",
      name: "Jogo da Forca",
      description: "Implemente o clássico jogo com palavras aleatórias e contagem de erros.",
      concepts: ["Strings", "StringBuilder", "Arrays de chars", "Lógica de jogo"],
      projectTask: "Desenho ASCII da forca + sistema de vidas",
      theory: "Strings são imutáveis em Java. charAt(i) acessa caractere na posição i. toCharArray() converte String em array de chars. contains() verifica se contém substring. StringBuilder permite modificar strings eficientemente.",
      codeExample: `import java.util.*;

public class JogoForca {
    public static void desenharForca(int erros) {
        System.out.println("\\n  +---+");
        System.out.println("  |   " + (erros >= 1 ? "O" : " "));
        System.out.println("  |  " + (erros >= 3 ? "/" : " ") + 
                          (erros >= 2 ? "|" : " ") + (erros >= 4 ? "\\\\" : " "));
        System.out.println("  |  " + (erros >= 5 ? "/" : " ") + 
                          " " + (erros >= 6 ? "\\\\" : " "));
        System.out.println("=====\\n");
    }
    
    public static void main(String[] args) {
        String[] palavras = {"JAVA", "PYTHON", "JAVASCRIPT"};
        String palavra = palavras[new Random().nextInt(palavras.length)];
        char[] descoberta = new char[palavra.length()];
        Arrays.fill(descoberta, '_');
        
        int erros = 0;
        String letrasUsadas = "";
        Scanner sc = new Scanner(System.in);
        
        while(erros < 6 && new String(descoberta).contains("_")) {
            desenharForca(erros);
            System.out.println("Palavra: " + new String(descoberta));
            System.out.println("Usadas: " + letrasUsadas);
            
            System.out.print("Letra: ");
            char letra = sc.next().toUpperCase().charAt(0);
            
            if(letrasUsadas.contains("" + letra)) {
                System.out.println("Já tentou essa!");
                continue;
            }
            
            letrasUsadas += letra + " ";
            boolean acertou = false;
            
            for(int i = 0; i < palavra.length(); i++) {
                if(palavra.charAt(i) == letra) {
                    descoberta[i] = letra;
                    acertou = true;
                }
            }
            
            if(!acertou) erros++;
        }
        
        System.out.println(erros >= 6 ? "Perdeu! Era: " + palavra : "Venceu!");
    }
}`,
      steps: [
        "Crie array de palavras possíveis",
        "Escolha palavra aleatória com Random",
        "Crie char[] com underscores: Arrays.fill(arr, '_')",
        "Loop while: erros < 6 E tem underscores",
        "Leia letra e converta para maiúscula",
        "Use charAt(i) para comparar com cada letra da palavra",
        "Atualize array descoberta ou incremente erros",
        "Desenhe forca baseado no número de erros"
      ],
      challenge: "Adicione categorias (animais, países), sistema de dicas após 3 erros, e placar com vitórias/derrotas salvo em arquivo."
    },
    {
      id: 8,
      level: "Intermediário",
      levelColor: "bg-blue-500",
      name: "Agenda de Contatos",
      description: "Gerencie contatos com busca e persistência em arquivo texto.",
      concepts: ["File I/O", "BufferedReader/Writer", "Exceções", "Try-catch"],
      projectTask: "Salvar e carregar contatos de arquivo",
      theory: "File I/O permite ler e escrever arquivos. BufferedReader/Writer são eficientes para arquivos de texto. try-catch trata exceções (erros). IOException é lançada em operações de arquivo. Sempre feche recursos (close()) ou use try-with-resources.",
      codeExample: `import java.io.*;
import java.util.*;

class Contato {
    String nome, telefone;
    
    public Contato(String nome, String telefone) {
        this.nome = nome;
        this.telefone = telefone;
    }
}

public class Agenda {
    static ArrayList<Contato> contatos = new ArrayList<>();
    static final String ARQUIVO = "contatos.txt";
    
    static void salvar() {
        try (BufferedWriter w = new BufferedWriter(new FileWriter(ARQUIVO))) {
            for(Contato c : contatos) {
                w.write(c.nome + "," + c.telefone);
                w.newLine();
            }
            System.out.println("💾 Salvo!");
        } catch(IOException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
    
    static void carregar() {
        try (BufferedReader r = new BufferedReader(new FileReader(ARQUIVO))) {
            String linha;
            while((linha = r.readLine()) != null) {
                String[] p = linha.split(",");
                contatos.add(new Contato(p[0], p[1]));
            }
        } catch(IOException e) {}
    }
    
    public static void main(String[] args) {
        carregar();
        Scanner sc = new Scanner(System.in);
        
        while(true) {
            System.out.println("\\n1-Add 2-Listar 3-Buscar 0-Sair");
            int op = sc.nextInt();
            sc.nextLine();
            
            if(op == 0) break;
            
            switch(op) {
                case 1:
                    System.out.print("Nome: ");
                    String n = sc.nextLine();
                    System.out.print("Tel: ");
                    String t = sc.nextLine();
                    contatos.add(new Contato(n, t));
                    salvar();
                    break;
                case 2:
                    for(Contato c : contatos)
                        System.out.println(c.nome + ": " + c.telefone);
                    break;
                case 3:
                    System.out.print("Buscar: ");
                    String b = sc.nextLine().toLowerCase();
                    for(Contato c : contatos)
                        if(c.nome.toLowerCase().contains(b))
                            System.out.println("✓ " + c.nome + ": " + c.telefone);
                    break;
            }
        }
    }
}`,
      steps: [
        "Importe java.io.* para File I/O",
        "Crie classe Contato com nome e telefone",
        "Use BufferedWriter com FileWriter para escrever",
        "write() escreve texto, newLine() pula linha",
        "Use BufferedReader com FileReader para ler",
        "readLine() retorna null quando acaba o arquivo",
        "split(',') separa os dados",
        "Envolva tudo em try-catch para tratar IOException"
      ],
      challenge: "Adicione email, endereço e aniversário. Implemente edição e exclusão de contatos. Use JSON ao invés de CSV para armazenamento."
    },
    {
      id: 9,
      level: "Intermediário-Avançado",
      levelColor: "bg-purple-500",
      name: "Sistema Bancário",
      description: "Simule operações bancárias com herança e polimorfismo. Múltiplos tipos de conta.",
      concepts: ["Herança", "Polimorfismo", "Abstract", "Interface"],
      projectTask: "ContaCorrente, ContaPoupança, ContaSalário",
      theory: "Herança permite que uma classe herde atributos e métodos de outra (extends). Classes abstratas não podem ser instanciadas. Polimorfismo permite que métodos tenham comportamentos diferentes. @Override sobrescreve métodos da classe pai.",
      codeExample: `abstract class Conta {
    protected String titular;
    protected double saldo;
    
    public Conta(String titular, double saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    
    public void depositar(double v) {
        saldo += v;
        System.out.println("✅ +R$" + v);
    }
    
    public abstract void sacar(double v);
    
    public void verSaldo() {
        System.out.printf("%s: R$%.2f\\n", titular, saldo);
    }
}

class ContaCorrente extends Conta {
    private double limite;
    
    public ContaCorrente(String t, double s, double l) {
        super(t, s);
        this.limite = l;
    }
    
    @Override
    public void sacar(double v) {
        if(saldo + limite >= v) {
            saldo -= v;
            System.out.println("✅ -R$" + v);
        } else {
            System.out.println("❌ Sem saldo!");
        }
    }
}

class ContaPoupanca extends Conta {
    public ContaPoupanca(String t, double s) {
        super(t, s);
    }
    
    @Override
    public void sacar(double v) {
        if(saldo >= v) {
            saldo -= v;
            System.out.println("✅ -R$" + v);
        } else {
            System.out.println("❌ Sem saldo!");
        }
    }
    
    public void renderJuros() {
        double j = saldo * 0.005;
        saldo += j;
        System.out.printf("📈 +R$%.2f\\n", j);
    }
}

public class Banco {
    public static void main(String[] args) {
        ContaCorrente cc = new ContaCorrente("João", 1000, 500);
        ContaPoupanca cp = new ContaPoupanca("Maria", 5000);
        
        cc.verSaldo();
        cc.sacar(1200); // Usa limite
        cc.verSaldo();
        
        cp.verSaldo();
        cp.renderJuros();
        cp.verSaldo();
    }
}`,
      steps: [
        "Crie classe abstract Conta com atributos protected",
        "Declare método abstract sacar (sem implementação)",
        "Use 'extends Conta' nas classes filhas",
        "Use super() no constructor para chamar constructor do pai",
        "Implemente @Override sacar() em cada classe filha",
        "Adicione métodos específicos (ex: renderJuros na poupança)",
        "Teste polimorfismo: Conta c = new ContaCorrente(...)"
      ],
      challenge: "Adicione ContaSalário, histórico de transações, transferências entre contas e interface para operações comuns."
    },
    {
      id: 10,
      level: "Intermediário-Avançado",
      levelColor: "bg-purple-500",
      name: "Loja Virtual (Console)",
      description: "E-commerce completo com produtos, carrinho e checkout. Use Collections avançadas.",
      concepts: ["HashMap", "TreeSet", "Comparator", "Generics"],
      projectTask: "Sistema de produtos, estoque e pedidos",
      theory: "HashMap armazena pares chave-valor com acesso O(1). TreeSet mantém elementos ordenados. Comparator define ordenação customizada. Generics (<T>) permitem código reutilizável e type-safe.",
      codeExample: `import java.util.*;

class Produto {
    String nome;
    double preco;
    int estoque;
    
    public Produto(String n, double p, int e) {
        nome = n; preco = p; estoque = e;
    }
}

public class Loja {
    static HashMap<Integer, Produto> produtos = new HashMap<>();
    static HashMap<Integer, Integer> carrinho = new HashMap<>();
    
    public static void main(String[] args) {
        produtos.put(1, new Produto("Notebook", 3000, 5));
        produtos.put(2, new Produto("Mouse", 50, 20));
        produtos.put(3, new Produto("Teclado", 150, 15));
        
        Scanner sc = new Scanner(System.in);
        
        while(true) {
            System.out.println("\\n1-Produtos 2-Add Carrinho 3-Ver Carrinho 4-Finalizar 0-Sair");
            int op = sc.nextInt();
            
            if(op == 0) break;
            
            switch(op) {
                case 1:
                    System.out.println("\\n=== PRODUTOS ===");
                    for(Map.Entry<Integer, Produto> e : produtos.entrySet()) {
                        Produto p = e.getValue();
                        System.out.printf("%d - %s: R$%.2f (Estoque: %d)\\n",
                            e.getKey(), p.nome, p.preco, p.estoque);
                    }
                    break;
                    
                case 2:
                    System.out.print("ID do produto: ");
                    int id = sc.nextInt();
                    System.out.print("Quantidade: ");
                    int qtd = sc.nextInt();
                    
                    if(produtos.containsKey(id)) {
                        Produto p = produtos.get(id);
                        if(p.estoque >= qtd) {
                            carrinho.put(id, carrinho.getOrDefault(id, 0) + qtd);
                            System.out.println("✅ Adicionado!");
                        } else {
                            System.out.println("❌ Estoque insuficiente!");
                        }
                    }
                    break;
                    
                case 3:
                    double total = 0;
                    System.out.println("\\n=== CARRINHO ===");
                    for(Map.Entry<Integer, Integer> e : carrinho.entrySet()) {
                        Produto p = produtos.get(e.getKey());
                        int q = e.getValue();
                        double sub = p.preco * q;
                        total += sub;
                        System.out.printf("%s x%d = R$%.2f\\n", p.nome, q, sub);
                    }
                    System.out.printf("TOTAL: R$%.2f\\n", total);
                    break;
                    
                case 4:
                    for(Map.Entry<Integer, Integer> e : carrinho.entrySet()) {
                        Produto p = produtos.get(e.getKey());
                        p.estoque -= e.getValue();
                    }
                    System.out.println("🎉 Pedido finalizado!");
                    carrinho.clear();
                    break;
            }
        }
    }
}`,
      steps: [
        "Use HashMap<Integer, Produto> para produtos (ID → Produto)",
        "Use HashMap<Integer, Integer> para carrinho (ID → Quantidade)",
        "put(chave, valor) adiciona ao HashMap",
        "get(chave) retorna valor",
        "containsKey(chave) verifica se existe",
        "getOrDefault(chave, valorPadrao) retorna valor ou padrão",
        "Itere com for(Map.Entry<K,V> e : map.entrySet())",
        "Atualize estoque ao finalizar pedido"
      ],
      challenge: "Adicione categorias de produtos, sistema de cupons de desconto, cálculo de frete e histórico de pedidos salvos em arquivo."
    },
    {
      id: 11,
      level: "Intermediário-Avançado",
      levelColor: "bg-purple-500",
      name: "Jogo de RPG por Turnos",
      description: "Crie um sistema de batalha com personagens, habilidades e inventário.",
      concepts: ["Enums", "Design patterns básicos", "Composição"],
      projectTask: "Sistema de classes (Guerreiro, Mago, Arqueiro)",
      theory: "Enums definem constantes nomeadas. Composição é quando uma classe contém outra (has-a). Design patterns são soluções reutilizáveis para problemas comuns. Strategy pattern permite trocar comportamentos em runtime.",
      codeExample: `enum Classe { GUERREIRO, MAGO, ARQUEIRO }

class Personagem {
    String nome;
    Classe classe;
    int vida, vidaMax;
    int mana, manaMax;
    int ataque, defesa;
    
    public Personagem(String n, Classe c) {
        nome = n;
        classe = c;
        switch(c) {
            case GUERREIRO:
                vidaMax = vida = 150;
                manaMax = mana = 20;
                ataque = 25;
                defesa = 15;
                break;
            case MAGO:
                vidaMax = vida = 80;
                manaMax = mana = 100;
                ataque = 35;
                defesa = 5;
                break;
            case ARQUEIRO:
                vidaMax = vida = 100;
                manaMax = mana = 50;
                ataque = 30;
                defesa = 10;
                break;
        }
    }
    
    public void atacar(Personagem alvo) {
        int dano = Math.max(1, ataque - alvo.defesa);
        alvo.vida -= dano;
        System.out.printf("%s ataca %s causando %d de dano!\\n", 
            nome, alvo.nome, dano);
    }
    
    public void habilidadeEspecial(Personagem alvo) {
        switch(classe) {
            case GUERREIRO:
                if(mana >= 15) {
                    int dano = ataque * 2;
                    alvo.vida -= dano;
                    mana -= 15;
                    System.out.println("⚔️ Golpe Poderoso! Dano: " + dano);
                }
                break;
            case MAGO:
                if(mana >= 30) {
                    int dano = 50;
                    alvo.vida -= dano;
                    mana -= 30;
                    System.out.println("🔥 Bola de Fogo! Dano: " + dano);
                }
                break;
            case ARQUEIRO:
                if(mana >= 20) {
                    int dano = ataque * 3;
                    alvo.vida -= dano;
                    mana -= 20;
                    System.out.println("🏹 Flecha Perfurante! Dano: " + dano);
                }
                break;
        }
    }
    
    public void mostrarStatus() {
        System.out.printf("\\n%s (%s)\\n", nome, classe);
        System.out.printf("❤️ Vida: %d/%d\\n", vida, vidaMax);
        System.out.printf("💙 Mana: %d/%d\\n", mana, manaMax);
    }
}

public class RPG {
    public static void main(String[] args) {
        Personagem jogador = new Personagem("Herói", Classe.GUERREIRO);
        Personagem inimigo = new Personagem("Dragão", Classe.MAGO);
        
        Scanner sc = new Scanner(System.in);
        
        while(jogador.vida > 0 && inimigo.vida > 0) {
            jogador.mostrarStatus();
            inimigo.mostrarStatus();
            
            System.out.println("\\n1-Ataque Normal 2-Habilidade Especial");
            int op = sc.nextInt();
            
            if(op == 1) {
                jogador.atacar(inimigo);
            } else {
                jogador.habilidadeEspecial(inimigo);
            }
            
            if(inimigo.vida > 0) {
                inimigo.atacar(jogador);
            }
        }
        
        System.out.println(jogador.vida > 0 ? "🎉 Vitória!" : "💀 Derrota!");
    }
}`,
      steps: [
        "Declare enum Classe com valores fixos",
        "Crie classe Personagem com atributos de combate",
        "Use switch para definir stats por classe",
        "Implemente método atacar com cálculo de dano",
        "Crie habilidades especiais por classe",
        "Implemente sistema de turnos com loop",
        "Verifique vida após cada turno",
        "Mostre status formatado com printf"
      ],
      challenge: "Adicione inventário com itens (poções, equipamentos), sistema de níveis e XP, múltiplos inimigos e sistema de salvar/carregar jogo."
    },
    {
      id: 12,
      level: "Intermediário-Avançado",
      levelColor: "bg-purple-500",
      name: "API REST Simples",
      description: "Seu primeiro servidor web com Spring Boot. CRUD de tarefas com JSON.",
      concepts: ["Spring Boot", "REST", "JSON", "HTTP methods"],
      projectTask: "Todo List API com endpoints GET/POST/PUT/DELETE",
      theory: "Spring Boot facilita criação de aplicações web. REST é um estilo arquitetural para APIs. JSON é formato de dados leve. HTTP methods: GET (ler), POST (criar), PUT (atualizar), DELETE (deletar). @RestController mapeia rotas, @RequestMapping define endpoints.",
      codeExample: `// Adicione ao pom.xml:
// <dependency>
//   <groupId>org.springframework.boot</groupId>
//   <artifactId>spring-boot-starter-web</artifactId>
// </dependency>

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;
import java.util.*;

class Tarefa {
    private Long id;
    private String titulo;
    private boolean concluida;
    
    public Tarefa(Long id, String titulo) {
        this.id = id;
        this.titulo = titulo;
        this.concluida = false;
    }
    
    // Getters e Setters
    public Long getId() { return id; }
    public String getTitulo() { return titulo; }
    public boolean isConcluida() { return concluida; }
    public void setConcluida(boolean c) { concluida = c; }
}

@RestController
@RequestMapping("/tarefas")
@SpringBootApplication
public class TodoAPI {
    
    private List<Tarefa> tarefas = new ArrayList<>();
    private Long proximoId = 1L;
    
    @GetMapping
    public List<Tarefa> listar() {
        return tarefas;
    }
    
    @PostMapping
    public Tarefa criar(@RequestBody Map<String, String> body) {
        Tarefa t = new Tarefa(proximoId++, body.get("titulo"));
        tarefas.add(t);
        return t;
    }
    
    @PutMapping("/{id}")
    public Tarefa atualizar(@PathVariable Long id) {
        for(Tarefa t : tarefas) {
            if(t.getId().equals(id)) {
                t.setConcluida(true);
                return t;
            }
        }
        return null;
    }
    
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        tarefas.removeIf(t -> t.getId().equals(id));
    }
    
    public static void main(String[] args) {
        SpringApplication.run(TodoAPI.class, args);
    }
}

// Teste com curl:
// GET:    curl http://localhost:8080/tarefas
// POST:   curl -X POST -H "Content-Type: application/json" \\
//         -d '{"titulo":"Estudar Java"}' http://localhost:8080/tarefas
// PUT:    curl -X PUT http://localhost:8080/tarefas/1
// DELETE: curl -X DELETE http://localhost:8080/tarefas/1`,
      steps: [
        "Configure Spring Boot no pom.xml ou Gradle",
        "Crie classe Tarefa com id, titulo, concluida",
        "Anote classe com @RestController e @SpringBootApplication",
        "Use @GetMapping para listar tarefas",
        "Use @PostMapping com @RequestBody para criar",
        "Use @PutMapping com @PathVariable para atualizar",
        "Use @DeleteMapping para remover",
        "Teste com Postman ou curl"
      ],
      challenge: "Adicione validação de dados, paginação, filtros por status, conexão com banco de dados H2 e autenticação JWT."
    },
    {
      id: 13,
      level: "Avançado",
      levelColor: "bg-orange-500",
      name: "Sistema de Blog com Banco de Dados",
      description: "Blog completo com MySQL, autenticação e comentários.",
      concepts: ["JDBC/JPA", "MySQL", "Relacionamentos", "Migrations"],
      projectTask: "Posts, usuários, comentários e categorias",
      theory: "JDBC conecta Java ao banco. JPA (Hibernate) mapeia objetos para tabelas. Relacionamentos: @OneToMany (1:N), @ManyToOne (N:1), @ManyToMany (N:N). Migrations gerenciam versões do schema. @Entity marca classes persistentes.",
      codeExample: `// application.properties:
// spring.datasource.url=jdbc:mysql://localhost:3306/blog
// spring.datasource.username=root
// spring.datasource.password=senha
// spring.jpa.hibernate.ddl-auto=update

import javax.persistence.*;
import java.util.*;

@Entity
class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome, email, senha;
    
    @OneToMany(mappedBy = "autor")
    private List<Post> posts;
}

@Entity
class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo, conteudo;
    
    @ManyToOne
    @JoinColumn(name = "autor_id")
    private Usuario autor;
    
    @OneToMany(mappedBy = "post")
    private List<Comentario> comentarios;
    
    @ManyToMany
    @JoinTable(
        name = "post_categoria",
        joinColumns = @JoinColumn(name = "post_id"),
        inverseJoinColumns = @JoinColumn(name = "categoria_id")
    )
    private Set<Categoria> categorias;
}

@Entity
class Comentario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String texto;
    
    @ManyToOne
    private Post post;
    
    @ManyToOne
    private Usuario autor;
}

@Entity
class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    
    @ManyToMany(mappedBy = "categorias")
    private Set<Post> posts;
}

interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByAutorId(Long autorId);
    List<Post> findByTituloContaining(String termo);
}

@RestController
@RequestMapping("/posts")
class PostController {
    @Autowired
    private PostRepository repo;
    
    @GetMapping
    public List<Post> listar() {
        return repo.findAll();
    }
    
    @PostMapping
    public Post criar(@RequestBody Post post) {
        return repo.save(post);
    }
}`,
      steps: [
        "Configure MySQL no application.properties",
        "Crie entidades com @Entity e @Id",
        "Use @GeneratedValue para auto increment",
        "Defina relacionamentos com @OneToMany/@ManyToOne",
        "Use @JoinColumn para foreign keys",
        "Crie repositories extends JpaRepository",
        "Injete repositories com @Autowired",
        "Use save(), findAll(), findById()"
      ],
      challenge: "Adicione paginação, busca full-text, upload de imagens, sistema de likes e autenticação com Spring Security."
    },
    {
      id: 14,
      level: "Avançado",
      levelColor: "bg-orange-500",
      name: "Chat em Tempo Real",
      description: "Sistema de chat usando Sockets e Threads. Múltiplos usuários simultâneos.",
      concepts: ["Sockets", "Threads", "Concorrência", "Sincronização"],
      projectTask: "Servidor multi-cliente com broadcast",
      theory: "Sockets permitem comunicação em rede. ServerSocket aceita conexões. Threads executam código simultaneamente. synchronized evita condições de corrida. CopyOnWriteArrayList é thread-safe.",
      codeExample: `import java.io.*;
import java.net.*;
import java.util.*;
import java.util.concurrent.*;

class ServidorChat {
    private static Set<ClienteHandler> clientes = 
        Collections.synchronizedSet(new HashSet<>());
    
    public static void main(String[] args) throws IOException {
        ServerSocket servidor = new ServerSocket(12345);
        System.out.println("🚀 Servidor iniciado na porta 12345");
        
        while(true) {
            Socket cliente = servidor.accept();
            ClienteHandler handler = new ClienteHandler(cliente);
            clientes.add(handler);
            new Thread(handler).start();
        }
    }
    
    public static void broadcast(String msg, ClienteHandler remetente) {
        synchronized(clientes) {
            for(ClienteHandler c : clientes) {
                if(c != remetente) {
                    c.enviar(msg);
                }
            }
        }
    }
}

class ClienteHandler implements Runnable {
    private Socket socket;
    private PrintWriter out;
    private BufferedReader in;
    private String nome;
    
    public ClienteHandler(Socket s) throws IOException {
        socket = s;
        out = new PrintWriter(socket.getOutputStream(), true);
        in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
    }
    
    public void run() {
        try {
            out.println("Digite seu nome:");
            nome = in.readLine();
            System.out.println(nome + " conectou!");
            ServidorChat.broadcast(nome + " entrou no chat", this);
            
            String mensagem;
            while((mensagem = in.readLine()) != null) {
                System.out.println(nome + ": " + mensagem);
                ServidorChat.broadcast(nome + ": " + mensagem, this);
            }
        } catch(IOException e) {
            System.out.println(nome + " desconectou");
        } finally {
            try { socket.close(); } catch(IOException e) {}
        }
    }
    
    public void enviar(String msg) {
        out.println(msg);
    }
}

// Cliente:
class ClienteChat {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 12345);
        BufferedReader in = new BufferedReader(
            new InputStreamReader(socket.getInputStream()));
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        Scanner scanner = new Scanner(System.in);
        
        // Thread para receber mensagens
        new Thread(() -> {
            try {
                String msg;
                while((msg = in.readLine()) != null) {
                    System.out.println(msg);
                }
            } catch(IOException e) {}
        }).start();
        
        // Thread principal envia mensagens
        while(true) {
            String msg = scanner.nextLine();
            out.println(msg);
        }
    }
}`,
      steps: [
        "Crie ServerSocket na porta desejada",
        "Use accept() para aceitar conexões (bloqueante)",
        "Crie Thread para cada cliente",
        "Use BufferedReader para ler mensagens",
        "Use PrintWriter para enviar mensagens",
        "Implemente broadcast para todos os clientes",
        "Use synchronized para operações thread-safe",
        "Trate desconexões com try-finally"
      ],
      challenge: "Adicione salas privadas, comandos (/help, /sair), histórico de mensagens, lista de usuários online e criptografia das mensagens."
    },
    {
      id: 15,
      level: "Avançado",
      levelColor: "bg-orange-500",
      name: "E-commerce com Microserviços",
      description: "Arquitetura distribuída com serviços independentes comunicando via APIs.",
      concepts: ["Microserviços", "Docker", "Message Queue", "API Gateway"],
      projectTask: "Serviços: Produtos, Pedidos, Pagamento, Usuários",
      theory: "Microserviços dividem aplicação em serviços pequenos e independentes. Cada serviço tem seu próprio banco. API Gateway roteia requisições. Message queues (RabbitMQ/Kafka) permitem comunicação assíncrona. Docker containeriza aplicações.",
      codeExample: `// Serviço de Produtos (porta 8081)
@RestController
@RequestMapping("/produtos")
public class ProdutoService {
    @GetMapping("/{id}")
    public Produto buscar(@PathVariable Long id) {
        // Busca no banco
        return produtoRepository.findById(id).orElse(null);
    }
    
    @PostMapping
    public Produto criar(@RequestBody Produto p) {
        return produtoRepository.save(p);
    }
}

// Serviço de Pedidos (porta 8082)
@RestController
@RequestMapping("/pedidos")
public class PedidoService {
    
    @Autowired
    private RestTemplate restTemplate;
    
    @Autowired
    private RabbitTemplate rabbitTemplate;
    
    @PostMapping
    public Pedido criar(@RequestBody PedidoDTO dto) {
        // Valida produto chamando serviço externo
        Produto p = restTemplate.getForObject(
            "http://localhost:8081/produtos/" + dto.getProdutoId(),
            Produto.class
        );
        
        if(p == null) throw new RuntimeException("Produto não encontrado");
        
        Pedido pedido = new Pedido();
        pedido.setProdutoId(dto.getProdutoId());
        pedido.setQuantidade(dto.getQuantidade());
        pedido.setTotal(p.getPreco() * dto.getQuantidade());
        
        pedidoRepository.save(pedido);
        
        // Envia mensagem para serviço de pagamento
        rabbitTemplate.convertAndSend("pagamentos", pedido);
        
        return pedido;
    }
}

// Serviço de Pagamento (porta 8083)
@Component
public class PagamentoListener {
    
    @RabbitListener(queues = "pagamentos")
    public void processar(Pedido pedido) {
        System.out.println("Processando pagamento: " + pedido.getId());
        
        // Simula processamento
        boolean sucesso = Math.random() > 0.2;
        
        if(sucesso) {
            pedido.setStatus("PAGO");
        } else {
            pedido.setStatus("FALHA");
        }
        
        // Atualiza pedido via API
        restTemplate.put(
            "http://localhost:8082/pedidos/" + pedido.getId(),
            pedido
        );
    }
}

// API Gateway (porta 8080)
@Configuration
public class GatewayConfig {
    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("produtos", r -> r.path("/api/produtos/**")
                .uri("http://localhost:8081"))
            .route("pedidos", r -> r.path("/api/pedidos/**")
                .uri("http://localhost:8082"))
            .build();
    }
}

// docker-compose.yml
version: '3'
services:
  rabbitmq:
    image: rabbitmq:management
    ports:
      - "5672:5672"
      - "15672:15672"
  
  produto-service:
    build: ./produto-service
    ports:
      - "8081:8081"
  
  pedido-service:
    build: ./pedido-service
    ports:
      - "8082:8082"
    depends_on:
      - rabbitmq`,
      steps: [
        "Crie projeto Spring Boot para cada serviço",
        "Configure portas diferentes (server.port no application.properties)",
        "Use RestTemplate para chamadas HTTP entre serviços",
        "Configure RabbitMQ para mensagens assíncronas",
        "Use @RabbitListener para consumir mensagens",
        "Crie API Gateway com Spring Cloud Gateway",
        "Escreva Dockerfile para cada serviço",
        "Use docker-compose para orquestrar tudo"
      ],
      challenge: "Adicione Service Discovery (Eureka), Circuit Breaker (Resilience4j), monitoramento (Prometheus), e load balancing."
    },
    {
      id: 16,
      level: "Avançado",
      levelColor: "bg-orange-500",
      name: "Sistema de Recomendação",
      description: "Algoritmo de machine learning básico para recomendar produtos/filmes.",
      concepts: ["Algoritmos", "Estruturas de dados avançadas", "Otimização"],
      projectTask: "Collaborative filtering + análise de similaridade",
      theory: "Collaborative filtering recomenda baseado em usuários similares. Cosseno de similaridade mede quão parecidos são vetores. Matrix factorization decompõe matriz de avaliações. Algoritmos de recomendação usam distância euclidiana ou correlação de Pearson.",
      codeExample: `import java.util.*;

class SistemaRecomendacao {
    // Matriz: usuário -> (filme -> nota)
    Map<String, Map<String, Double>> avaliacoes = new HashMap<>();
    
    public void adicionar(String usuario, String filme, double nota) {
        avaliacoes.putIfAbsent(usuario, new HashMap<>());
        avaliacoes.get(usuario).put(filme, nota);
    }
    
    // Calcula similaridade de cosseno entre usuários
    public double similaridade(String user1, String user2) {
        Map<String, Double> av1 = avaliacoes.get(user1);
        Map<String, Double> av2 = avaliacoes.get(user2);
        
        // Filmes em comum
        Set<String> comuns = new HashSet<>(av1.keySet());
        comuns.retainAll(av2.keySet());
        
        if(comuns.isEmpty()) return 0;
        
        double dotProduct = 0, mag1 = 0, mag2 = 0;
        
        for(String filme : comuns) {
            double n1 = av1.get(filme);
            double n2 = av2.get(filme);
            dotProduct += n1 * n2;
            mag1 += n1 * n1;
            mag2 += n2 * n2;
        }
        
        return dotProduct / (Math.sqrt(mag1) * Math.sqrt(mag2));
    }
    
    // Recomenda filmes baseado em usuários similares
    public List<String> recomendar(String usuario, int top) {
        Map<String, Double> similares = new HashMap<>();
        
        // Encontra usuários similares
        for(String outro : avaliacoes.keySet()) {
            if(!outro.equals(usuario)) {
                double sim = similaridade(usuario, outro);
                similares.put(outro, sim);
            }
        }
        
        // Ordena por similaridade
        List<Map.Entry<String, Double>> sorted = 
            new ArrayList<>(similares.entrySet());
        sorted.sort((a, b) -> b.getValue().compareTo(a.getValue()));
        
        // Pontuação de filmes
        Map<String, Double> scores = new HashMap<>();
        Map<String, Double> somas = new HashMap<>();
        
        Map<String, Double> meus = avaliacoes.get(usuario);
        
        for(Map.Entry<String, Double> e : sorted) {
            String outro = e.getKey();
            double sim = e.getValue();
            
            for(Map.Entry<String, Double> av : avaliacoes.get(outro).entrySet()) {
                String filme = av.getKey();
                
                // Ignora se já viu
                if(meus.containsKey(filme)) continue;
                
                scores.put(filme, scores.getOrDefault(filme, 0.0) + av.getValue() * sim);
                somas.put(filme, somas.getOrDefault(filme, 0.0) + sim);
            }
        }
        
        // Normaliza scores
        for(String filme : scores.keySet()) {
            scores.put(filme, scores.get(filme) / somas.get(filme));
        }
        
        // Retorna top N
        return scores.entrySet().stream()
            .sorted((a, b) -> b.getValue().compareTo(a.getValue()))
            .limit(top)
            .map(Map.Entry::getKey)
            .collect(Collectors.toList());
    }
}

public class Teste {
    public static void main(String[] args) {
        SistemaRecomendacao sr = new SistemaRecomendacao();
        
        // Dados de treino
        sr.adicionar("João", "Matrix", 5.0);
        sr.adicionar("João", "Star Wars", 4.0);
        sr.adicionar("João", "Titanic", 2.0);
        
        sr.adicionar("Maria", "Matrix", 4.5);
        sr.adicionar("Maria", "Star Wars", 5.0);
        sr.adicionar("Maria", "Avatar", 4.0);
        
        sr.adicionar("Pedro", "Titanic", 5.0);
        sr.adicionar("Pedro", "Avatar", 3.0);
        
        // Recomendações para João
        List<String> rec = sr.recomendar("João", 3);
        System.out.println("Recomendações para João: " + rec);
    }
}`,
      steps: [
        "Crie estrutura para armazenar avaliações (Map de Maps)",
        "Implemente cálculo de similaridade de cosseno",
        "Encontre usuários mais similares ao usuário alvo",
        "Calcule score para cada filme não visto",
        "Pondere scores pela similaridade do usuário",
        "Normalize dividindo pela soma das similaridades",
        "Ordene por score e retorne top N",
        "Teste com dados reais"
      ],
      challenge: "Implemente matrix factorization (SVD), adicione filtro por categoria, considere timestamp das avaliações e crie interface web para visualização."
    },
    {
        id: 17,
        level: "Expert",
        levelColor: "bg-red-500",
        name: "Plataforma de Streaming",
        description: "Sistema completo de vídeo streaming com upload, processamento e reprodução.",
        concepts: ["AWS S3", "Video processing", "CDN", "Scalability"],
        projectTask: "Upload, encoding, playlist HLS, player",
        theory: "S3 armazena arquivos na nuvem. FFmpeg converte vídeos. HLS (HTTP Live Streaming) divide vídeo em chunks. CDN distribui conteúdo globalmente. AWS SDK permite integração com serviços AWS.",
        codeExample:
`import com.amazonaws.services.s3.*;
import com.amazonaws.services.s3.model.*;
import java.io.*;

@Service
public class StreamingService {
    
    @Autowired
    private AmazonS3 s3Client;
    
    private static final String BUCKET = "meu-streaming";
    
    // Upload de vídeo
    public String upload(MultipartFile file) throws IOException {
        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentLength(file.getSize());
        metadata.setContentType(file.getContentType());
        
        s3Client.putObject(new PutObjectRequest(
            BUCKET,
            "videos/" + fileName,
            file.getInputStream(),
            metadata
        ));
        
        // Agenda processamento
        processarVideo(fileName);
        
        return fileName;
    }
    
    // Processa vídeo com FFmpeg
    private void processarVideo(String fileName) {
        String inputPath = "/tmp/" + fileName;
        String outputPath = "/tmp/hls/" + fileName;
        
        // Baixa do S3
        s3Client.getObject(
            new GetObjectRequest(BUCKET, "videos/" + fileName),
            new File(inputPath)
        );
        
        // Comando FFmpeg para HLS
        String cmd = String.format(
            "ffmpeg -i %s -codec: copy -start_number 0 " +
            "-hls_time 10 -hls_list_size 0 -f hls %s/playlist.m3u8",
            inputPath, outputPath
        );
        
        try {
            Process p = Runtime.getRuntime().exec(cmd);
            p.waitFor();
            
            // Upload dos chunks para S3
            File dir = new File(outputPath);
            for(File chunk : dir.listFiles()) {
                s3Client.putObject(
                    BUCKET,
                    "hls/" + fileName + "/" + chunk.getName(),
                    chunk
                );
            }
        } catch(Exception e) {
            throw new RuntimeException("Erro ao processar vídeo", e);
        }
    }
    
    // Gera URL de streaming
    public String getStreamUrl(String fileName) {
        return s3Client.generatePresignedUrl(
            BUCKET,
            "hls/" + fileName + "/playlist.m3u8",
            Date.from(Instant.now().plus(1, ChronoUnit.HOURS))
        ).toString();
    }
}

@RestController
@RequestMapping("/videos")
public class VideoController {
    
    @Autowired
    private StreamingService service;
    
    @PostMapping("/upload")
    public ResponseEntity<String> upload(@RequestParam("file") MultipartFile file) {
        try {
            String id = service.upload(file);
            return ResponseEntity.ok(id);
        } catch(IOException e) {
            return ResponseEntity.status(500).body("Erro: " + e.getMessage());
        }
    }
    
    @GetMapping("/stream/{id}")
    public ResponseEntity<String> stream(@PathVariable String id) {
        String url = service.getStreamUrl(id);
        return ResponseEntity.ok(url);
    }
}

        // Frontend HTML com Video.js
        /*
        <video id="player" class="video-js" controls preload="auto">
        <source src="URL_DO_HLS" type="application/x-mpegURL">
        </video>

        <script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>
        <script>
        var player = videojs('player');
        player.src({
            src: 'https://bucket.s3.amazonaws.com/hls/video/playlist.m3u8',
            type: 'application/x-mpegURL'
        });
        </script>
        */`,

        steps: [
            "FIM"
        ],
        challenge: [
            "FIM"
        ]
    }
  ];

  const toggleProject = (id) => {
    setCompletedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleProjectExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const getProgress = () => Math.round((completedProjects.size / projects.length) * 100);

  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.level]) {
      acc[project.level] = [];
    }
    acc[project.level].push(project);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ☕ Curso Completo de Java
          </h1>
          <p className="text-slate-300 text-lg mb-6">
            Do básico ao avançado com {projects.length} projetos práticos
          </p>
          
          {/* Progress Bar */}
          <div className="bg-slate-700 rounded-full h-4 overflow-hidden max-w-md mx-auto">
            <div 
              className="bg-gradient-to-r from-green-500 to-blue-500 h-full transition-all duration-500"
              style={{ width: `${getProgress()}%` }}
            />
          </div>
          <p className="text-slate-400 mt-2">
            {completedProjects.size} de {projects.length} projetos ({getProgress()}%)
          </p>

          <button onClick={resetProgress} className="mt-4 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition">
            🔄 Resetar Progresso
          </button>
        </div>

        {/* Projects */}
        {Object.entries(groupedProjects).map(([level, levelProjects]) => (
          <div key={level} className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <div className={`w-2 h-8 ${levelProjects[0].levelColor} rounded`}></div>
              {level}
            </h2>
            
            <div className="space-y-4">
              {levelProjects.map((project) => {
                const isCompleted = completedProjects.has(project.id);
                const isExpanded = expandedProject === project.id;
                
                return (
                  <div
                    key={project.id}
                    className={`rounded-xl border-2 transition-all overflow-hidden ${
                      isCompleted 
                        ? 'bg-green-900/20 border-green-500/50' 
                        : 'bg-slate-800 border-slate-700'
                    }`}
                  >
                    {/* Project Header */}
                    <div className="p-5">
                      <div className="flex items-start gap-4">
                        <button
                          onClick={() => toggleProject(project.id)}
                          className="mt-1 flex-shrink-0"
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-6 h-6 text-green-400" />
                          ) : (
                            <Circle className="w-6 h-6 text-slate-500 hover:text-slate-400" />
                          )}
                        </button>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {project.id}. {project.name}
                          </h3>
                          <p className="text-slate-300 mb-3">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.concepts.map((concept, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm"
                              >
                                {concept}
                              </span>
                            ))}
                          </div>
                          
                          <div className="bg-slate-900/50 p-3 rounded border border-slate-600 mb-3">
                            <div className="text-sm font-semibold text-orange-400 mb-1">
                              💡 Projeto:
                            </div>
                            <div className="text-slate-300 text-sm">
                              {project.projectTask}
                            </div>
                          </div>
                          
                          <button
                            onClick={() => toggleProjectExpand(project.id)}
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                          >
                            <BookOpen className="w-5 h-5" />
                            {isExpanded ? 'Ocultar conteúdo' : 'Ver conteúdo completo'}
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Expandable Content */}
                    {isExpanded && (
                      <div className="border-t-2 border-slate-700 p-5 bg-slate-900/30 space-y-5">
                        {/* Theory */}
                        <div>
                          <h4 className="text-lg font-bold text-blue-400 mb-2 flex items-center gap-2">
                            📚 Conceitos Importantes
                          </h4>
                          <p className="text-slate-300 leading-relaxed">
                            {project.theory}
                          </p>
                        </div>
                        
                        {/* Code Example */}
                        <div>
                          <h4 className="text-lg font-bold text-green-400 mb-2 flex items-center gap-2">
                            💻 Exemplo de Código
                          </h4>
                          <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto border border-slate-700">
                            <code className="text-green-300 text-sm font-mono">
                              {project.codeExample}
                            </code>
                          </pre>
                        </div>
                        
                        {/* Steps */}
                        <div>
                          <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                            📝 Passo a Passo
                          </h4>
                          <ol className="space-y-2">
                            {project.steps.map((step, i) => (
                              <li key={i} className="flex gap-3 text-slate-300">
                                <span className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                  {i + 1}
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                        
                        {/* Challenge */}
                        <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-4 rounded-lg border border-orange-500/30">
                          <h4 className="text-lg font-bold text-orange-400 mb-2 flex items-center gap-2">
                            🏆 Desafio Extra
                          </h4>
                          <p className="text-slate-300">
                            {project.challenge}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Footer Tips */}
        <div className="mt-12 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-6 border border-blue-500/30">
          <h3 className="text-xl font-bold text-white mb-3">📚 Dicas de Estudo</h3>
          <ul className="text-slate-300 space-y-2">
            <li>✅ Leia toda a teoria antes de começar a codar</li>
            <li>✅ Digite o código você mesmo (não copie e cole)</li>
            <li>✅ Teste cada funcionalidade conforme implementa</li>
            <li>✅ Faça o desafio extra para fixar melhor</li>
            <li>✅ Se travar, revise os conceitos e exemplos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JavaCourse;
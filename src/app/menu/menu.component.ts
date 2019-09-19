import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'node_modules/primeng/components/common/menuitem';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
   items: MenuItem[];

    ngOnInit() {

        this.items = [

            {
                label: 'Tabela',
                icon: 'pi pi-table',
                items: [
                    {label: 'Empresa',
                    items: [
                        {label: 'Cadastro'},
                        {label: 'Área Manejo Florestal (AMF) / UPA / UT'},

                          ]
                    },
                    {
                    label: 'Empregado',
                    items: [
                        {label: 'Cadastro'},
                                {label: 'Escolaridade'},
                                 {label: 'Função'},
                                 {label: 'Área de Trabalho'},
                                 {label: 'Situação no Dia'}
                        ]
                    },
                    {
                    label: 'Máquina',
                    items: [
                        {label: 'Cadasto'},
                                 {label: 'Tipo'},
                                 {label: 'Marca'},
                                 {label: 'Situação do Dia'},
                                 {label: 'Resumo da Máquina'}
                        ]

                    },
                    {
                    label: 'Atividade',
                    items: [
                        {label: 'Cadasto'},
                        {label: 'Fase'},
                        {label: 'Fator Adverso'},
                      ]

                    },
                    {
                        label: 'Itens de Consumo'
                    },
                    {
                        label: 'Tipo de Despesa'
                    },
                    {
                        label: 'Tipo de Distribuição'
                    },
                    {
                        label: 'Unidade de Medida'
                    },
                    {
                        label: 'Moeda'
                    },
                    {separator:true},
                    {
                        label: 'Sair'
                    },

                ]



            },
            {
                label: 'Dados da Floresta',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Fomulário de Equipe'},
                    {label: 'Frequencia do Empregado'},
                    {label: 'Frequencia de Máquina'},
                    {separator:true},
                    {label: 'Lançamento de Salário'},
                    {label: 'Lancamento de Despesas'},
                    {label: 'Consumo de Peças'},
                    {separator:true},
                    {label: 'Formulário de Apoio',
                            items: [
                                {label: 'Ficha de Frequência'},
                                {separator:true},
                                {label: 'Formulário de Equipe'},
                                {label: 'Lançamento de Despesas'},
                                {label: 'Consumo de Peças e Materiais'},
                            ]
                    }
                ]

            },
            {
                label: 'Preparação para a Análise',
                icon: 'pi pi-fw pi-question',
                items: [
                    {label: 'Definir Parâmetros da Safra'},
                    {label: 'Definir Produção Mensal'},
                    {label: 'Definir Fatores de Conversão'},
                ]

            },

            {
                label: 'Análise',
                icon: ' pi pi-chart-line',
                items: [
                    {label: 'Geração da Análise de Dados'},
                    {separator:true},
                    {label: 'Produção Mensal'},
                    {label: 'Produção Média Diária'},
                    {separator:true},
                    {label: 'Custo de Produção'},
                    {label: 'Custo por Volume. Área e Árvore'},
                    {label: 'Distribuição por tipo de Custo'},
                ]
            },
            {
                label: 'Gráfico',
                icon: ' ',
                items: [
                    {label: 'Produção por Equipe'},
                    {label: 'Produção por Equipe'},
                    {separator:true},
                    {label: 'Custo de Produção por Equipe'},
                    {label: 'Custo de Produção por Máquina'},
                    {label: 'Custo Mensal de Produção'},
                    {label: 'Custo Total por Atividade'},
                    {label: 'Fator Adverso por Mês'},
                    {separator:true},
                    {label: 'Situação do Empregado por Mês'},
                    {label: 'Situação da Máquima por Mês'}
                ]
            },
            {
                label: 'Sair', icon: 'pi pi-fw pi-times'
            }



        ]
    }
}



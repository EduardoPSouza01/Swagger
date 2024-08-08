import { Request, Response } from "express";
import { ProductService } from "../service/ProductService";
import { Body, Controller, Post, Res, Route, Tags, TsoaResponse } from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { ProductRequestDto } from "../model/dto/ProductRequestDto";

@Route("product")
@Tags("Product")

export class ProductController extends Controller{

    productService = new ProductService();

    @Post()

    async cadastrarProduto ( 
                    @Body() dto:ProductRequestDto, 
                    @Res() fail:TsoaResponse<400, BasicResponseDto>, 
                    @Res() success:TsoaResponse<200, BasicResponseDto>
            ): Promise< | void> {
                
        try {
            const product = await this.productService.cadastrarProduto(dto);
            return success(200, new BasicResponseDto('Produto criado com sucesso!', product))
        } catch (error: any) {
            return fail(400 , new BasicResponseDto ( error . message , undefined ));
        }
    };

    async atualizarProduto ( 
                    @Body() dto:ProductRequestDto, 
                    @Res() fail:TsoaResponse<400, BasicResponseDto>, 
                    @Res() success:TsoaResponse<200, BasicResponseDto>
            ): Promise< | void> {
        try {

            const product = await this.productService.atualizarProduto(dto);
            return success(200, new BasicResponseDto('Produto criado com sucesso!', product))
        } catch (error: any) {
            return fail(400 , new BasicResponseDto ( error . message , undefined ));
        }
    };

    async deletarProduto ( 
                    @Body() dto:ProductRequestDto, 
                    @Res() fail:TsoaResponse<400, BasicResponseDto>, 
                    @Res() success:TsoaResponse<200, BasicResponseDto>
            ): Promise< | void> {

        try {
            const product = await this.productService.deletarProduto(dto);
            return success(200, new BasicResponseDto('Produto criado com sucesso!', product))
        } catch (error: any) {
            return fail(400 , new BasicResponseDto ( error . message , undefined ));
        }
    };

    async filtrarProduto ( 
                    @Body() dto:ProductRequestDto, 
                    @Res() fail:TsoaResponse<400, BasicResponseDto>, 
                    @Res() success:TsoaResponse<200, BasicResponseDto>
        ): Promise< | void> {

        try {
            const product = await this.productService.filtrarProduto(dto);
            return success(200, new BasicResponseDto('Produto criado com sucesso!', product))
        } catch (error: any) {
            return fail(400 , new BasicResponseDto ( error . message , undefined ));
        }
    };

    async listarTodosProduto ( 
                @Body() dto:ProductRequestDto, 
                @Res() fail:TsoaResponse<400, BasicResponseDto>, 
                @Res() success:TsoaResponse<200, BasicResponseDto>
            ): Promise< | void> {

        try {
            const product = await this.productService.listarTodosProdutos();
            return success(200, new BasicResponseDto('Produto criado com sucesso!', product))
        } catch (error: any) {
            return fail(400 , new BasicResponseDto ( error . message , undefined ));
        }
    }
}
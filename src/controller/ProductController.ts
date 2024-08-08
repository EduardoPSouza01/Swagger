import { Request, Response } from "express";
import { ProductService } from "../service/ProductService";
import { Body, Controller, Delete, Get, Path, Post, Put, Res, Route, Tags, TsoaResponse } from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { ProductRequestDto } from "../model/dto/ProductRequestDto";
import { Product } from "../model/entity/ProductEntity";

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

    @Put()
    async atualizarProduto ( 
                    @Body() dto:Product, 
                    @Res() fail:TsoaResponse<400, BasicResponseDto>, 
                    @Res() success:TsoaResponse<200, BasicResponseDto>
            ): Promise< | void> {
        try {

            const product = await this.productService.atualizarProduto(dto);
            return success(200, new BasicResponseDto('Produto Atualizado com sucesso!', product))
        } catch (error: any) {
            return fail(400 , new BasicResponseDto ( error . message , undefined ));
        }
    };

    @Delete()
    async deletarProduto ( 
                    @Body() dto:Product, 
                    @Res() fail:TsoaResponse<400, BasicResponseDto>, 
                    @Res() success:TsoaResponse<200, BasicResponseDto>
            ): Promise< | void> {

        try {
            const product = await this.productService.deletarProduto(dto);
            return success(200, new BasicResponseDto('Produto Deletado com sucesso!', product))
        } catch (error: any) {
            return fail(400 , new BasicResponseDto ( error . message , undefined ));
        }
    };

    @Get("{id}")
    async filtrarProduto ( 
                    @Path() id:number, 
                    @Res() fail:TsoaResponse<400, BasicResponseDto>, 
                    @Res() success:TsoaResponse<200, BasicResponseDto>
        ): Promise< | void> {

        try {
            const product = await this.productService.filtrarProduto(id);
            return success(200, new BasicResponseDto('Produto Filtrado com sucesso!', product))
        } catch (error: any) {
            return fail(400 , new BasicResponseDto ( error . message , undefined ));
        }
    };
    
    @Get()
    async listarTodosProduto ( 
                @Body() dto:ProductRequestDto, 
                @Res() fail:TsoaResponse<400, BasicResponseDto>, 
                @Res() success:TsoaResponse<200, BasicResponseDto>
            ): Promise< | void> {

        try {
            const product = await this.productService.listarTodosProdutos();
            return success(200, new BasicResponseDto('Produto Filtrado com sucesso!', product))
        } catch (error: any) {
            return fail(400 , new BasicResponseDto ( error . message , undefined ));
        }
    }
}
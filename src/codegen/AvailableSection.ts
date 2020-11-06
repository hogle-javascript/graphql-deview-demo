/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as ProductCard from "./ProductCard";
import * as Title from "./Title";
import * as Banner from "./Banner";
export interface IAvailableSection {
    card?: ProductCard.IProductCard;
    title?: Title.ITitle;
    banner?: Banner.IBanner;
}
export interface IAvailableSectionArgs {
    card?: ProductCard.IProductCardArgs;
    title?: Title.ITitleArgs;
    banner?: Banner.IBannerArgs;
}
export const AvailableSectionCodec: thrift.IStructCodec<IAvailableSectionArgs, IAvailableSection> = {
    encode(args: IAvailableSectionArgs, output: thrift.TProtocol): void {
        let _fieldsSet: number = 0;
        const obj: any = {
            card: args.card,
            title: args.title,
            banner: args.banner
        };
        output.writeStructBegin("AvailableSection");
        if (obj.card != null) {
            _fieldsSet++;
            output.writeFieldBegin("card", thrift.TType.STRUCT, 1);
            ProductCard.ProductCardCodec.encode(obj.card, output);
            output.writeFieldEnd();
        }
        if (obj.title != null) {
            _fieldsSet++;
            output.writeFieldBegin("title", thrift.TType.STRUCT, 2);
            Title.TitleCodec.encode(obj.title, output);
            output.writeFieldEnd();
        }
        if (obj.banner != null) {
            _fieldsSet++;
            output.writeFieldBegin("banner", thrift.TType.STRUCT, 3);
            Banner.BannerCodec.encode(obj.banner, output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        if (_fieldsSet > 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion cannot have more than one value");
        }
        else if (_fieldsSet < 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion must have one value set");
        }
        return;
    },
    decode(input: thrift.TProtocol): IAvailableSection {
        let _fieldsSet: number = 0;
        let _returnValue: any = null;
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.STRUCT) {
                        _fieldsSet++;
                        const value_1: ProductCard.IProductCard = ProductCard.ProductCardCodec.decode(input);
                        _returnValue = { card: value_1 };
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRUCT) {
                        _fieldsSet++;
                        const value_2: Title.ITitle = Title.TitleCodec.decode(input);
                        _returnValue = { title: value_2 };
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRUCT) {
                        _fieldsSet++;
                        const value_3: Banner.IBanner = Banner.BannerCodec.decode(input);
                        _returnValue = { banner: value_3 };
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        if (_fieldsSet > 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion cannot have more than one value");
        }
        else if (_fieldsSet < 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion must have one value set");
        }
        if (_returnValue !== null) {
            if (_returnValue.card !== undefined) {
                return {
                    card: _returnValue.card
                };
            }
            else {
                if (_returnValue.title !== undefined) {
                    return {
                        title: _returnValue.title
                    };
                }
                else {
                    return {
                        banner: _returnValue.banner
                    };
                }
            }
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read data for TUnion");
        }
    }
};
export class AvailableSection extends thrift.StructLike implements IAvailableSection {
    public card?: ProductCard.IProductCard;
    public title?: Title.ITitle;
    public banner?: Banner.IBanner;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IAvailableSectionArgs = {}) {
        super();
        let _fieldsSet: number = 0;
        if (args.card != null) {
            _fieldsSet++;
            const value_4: ProductCard.IProductCard = new ProductCard.ProductCard(args.card);
            this.card = value_4;
        }
        if (args.title != null) {
            _fieldsSet++;
            const value_5: Title.ITitle = new Title.Title(args.title);
            this.title = value_5;
        }
        if (args.banner != null) {
            _fieldsSet++;
            const value_6: Banner.IBanner = new Banner.Banner(args.banner);
            this.banner = value_6;
        }
        if (_fieldsSet > 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion cannot have more than one value");
        }
        else if (_fieldsSet < 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion must have one value set");
        }
    }
    public static read(input: thrift.TProtocol): AvailableSection {
        return new AvailableSection(AvailableSectionCodec.decode(input));
    }
    public static write(args: IAvailableSectionArgs, output: thrift.TProtocol): void {
        return AvailableSectionCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return AvailableSectionCodec.encode(this, output);
    }
}
gifts1 = ['car', 'doll#arm', 'ball', '#train']

def filtergifts (list):

    listafinal = []    


    for palabra in gifts1:
    
        contieneCaracter = False
        
        for letra in palabra:
            
            if letra == '#':
                contieneCaracter = True
                break

        if not contieneCaracter:
            listafinal.append(palabra)

    return listafinal


print (filtergifts(gifts1))
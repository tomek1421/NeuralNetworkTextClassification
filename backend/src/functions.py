def tuple_parse(tab):
    if len(tab) == 0:
        raise Exception("[ERROR] Table is empty")
    t = ()
    for e in tab:
        t += (e, )
    return t